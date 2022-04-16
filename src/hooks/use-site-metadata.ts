import { graphql, useStaticQuery } from 'gatsby';

export type SiteMetadata = Readonly<{
  title: string;
  description: string;
}>;

export type Site = Readonly<{
  pathPrefix: string;
  siteMetadata: SiteMetadata;
}>;

export function useSite(): Site {
  const { site } = useStaticQuery<{ site: Site }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
          pathPrefix
        }
      }
    `,
  );

  return site;
}

export function useSiteMetadata(): SiteMetadata {
  const { siteMetadata } = useSite();

  return siteMetadata;
}

export function useSitePathPrefix(): string {
  const { pathPrefix } = useSite();

  return pathPrefix;
}
