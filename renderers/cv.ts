/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { countryCodeEmoji } from 'country-code-emoji';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { GatsbyNode } from 'gatsby';

// grabbed from https://github.com/twitter/twemoji
function toCodePoint(unicodeSurrogates: string): string {
  const result = [];
  let charCode = 0;
  let previous = 0;
  let i = 0;

  while (i < unicodeSurrogates.length) {
    // eslint-disable-next-line no-plusplus
    charCode = unicodeSurrogates.charCodeAt(i++);
    if (previous) {
      result.push(
        // eslint-disable-next-line no-bitwise
        (65536 + ((previous - 55296) << 10) + (charCode - 56320)).toString(16),
      );
      previous = 0;
    } else if (charCode >= 55296 && charCode <= 56319) {
      previous = charCode;
    } else {
      result.push(charCode.toString(16));
    }
  }
  return result.join('-');
}

function resolveTwimojiURL(countryCode: string): string {
  return `https://twemoji.maxcdn.com/v/latest/svg/${toCodePoint(
    countryCodeEmoji(countryCode),
  )}.svg`;
}

export const rendererCV: NonNullable<GatsbyNode['createPages']> = async ({
  actions: { createPage, createNode },
  graphql,
  store,
  cache,
  createContentDigest,
  reporter,
}) => {
  const response = await graphql<{ allCV: { nodes: readonly any[] } }>(`
    query AllCVData {
      allCV: allYaml(filter: { meta: { type: { eq: "cv" } } }) {
        nodes {
          meta {
            template
          }
          profile {
            name
            position
            avatar {
              svg {
                content
              }
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
              extension
              publicURL
            }
          }
          contacts {
            type
            value
          }
          socials {
            name
            username
            profileURL
            icon {
              svg {
                content
              }
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
              extension
              publicURL
            }
          }
          languages {
            level
            countryCode
            name
          }
          body {
            title
            type
            paragraphs {
              text
              color
            }
            companies {
              companyName
              companyURL
              companyLogo {
                svg {
                  content
                }
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
                extension
                publicURL
              }
              position
              dateStarted
              location
              description {
                text
                color
              }
            }
            courses {
              companyLogo {
                svg {
                  content
                }
                childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR)
                }
                extension
                publicURL
              }
              companyURL
              courseName
              dateStarted
              dateEnded
              certificateURL
            }
          }
        }
      }
    }
  `);

  if (response.errors || !response.data) {
    reporter.panicOnBuild(
      'Error while running AllCVData query.',
      response.errors,
    );
    return;
  }

  await Promise.all(
    response.data.allCV.nodes.map(async ({ meta, ...cv }) => {
      const pagePath = `/cv-${cv.profile.name
        .replace(/\s/g, '-')
        .toLowerCase()}`;

      const body = cv.body.map(
        ({ companies, courses, paragraphs, ...content }: any) => ({
          ...content,
          data: [
            // flatten data which discriminated by type
            ...arrayOrEmptyArray(companies),
            ...arrayOrEmptyArray(courses),
            ...arrayOrEmptyArray(paragraphs),
          ],
        }),
      );

      const languages = await Promise.all(
        cv.languages.map(async (language: any) => {
          const { relativePath } = await createRemoteFileNode({
            url: resolveTwimojiURL(language.countryCode),
            ext: '.svg',
            store,
            cache,
            createNode,
            createNodeId: createContentDigest,
            reporter,
          });

          const { data } = await graphql<{
            flagIcon: any;
          }>(
            `
              query FlagIcon($relativePath: String!) {
                flagIcon: file(relativePath: { eq: $relativePath }) {
                  svg {
                    content
                  }
                  childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR)
                  }
                  extension
                  publicURL
                }
              }
            `,
            { relativePath },
          );

          return {
            ...language,
            icon: data?.flagIcon,
          };
        }),
      );

      return createPage({
        path: pagePath,
        component: path.resolve(
          `src/templates/${meta.template || 'cv-regular'}/index.tsx`,
        ),
        context: {
          cv: {
            ...cv,
            body,
            languages,
            pdfURL: `${pagePath}.pdf`,
          },
        },
      });
    }),
  );
};

function arrayOrEmptyArray<T>(list: T[] | undefined | null): T[] {
  return list ?? [];
}
