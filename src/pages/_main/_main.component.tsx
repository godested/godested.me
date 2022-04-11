import { ReactElement } from 'react';
import { Link } from 'gatsby';
import { Typography } from 'common/components/typography';
import { Hero } from 'common/components/hero';
import { Page } from 'common/components/page';
import * as styles from './_main.module.scss';

// TODO: LinkComponent<{ to: string, external: boolean }>

export function MainPage(): ReactElement {
  return (
    <Page title="Zaitsev Ilya">
      <Hero>
        <main className={styles.container}>
          <Typography
            variant={Typography.Variant.Heading}
            fontWeight={Typography.Weight.Medium}
            className={styles.title}
          >
            Ilya Zaitsev{' '}
          </Typography>
          <Typography
            variant={Typography.Variant.Title}
            fontWeight={Typography.Weight.Regular}
            className={styles.username}
          >
            @godested
          </Typography>
          {/* ul -> li + config? */}
          <div className={styles.links}>
            <Typography
              as={Link}
              to="/cv"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              CV / Résumé
            </Typography>
            <Typography
              as="a"
              href="https://instagram.com/ztsvi"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              Instagram
            </Typography>
            <Typography
              as="a"
              href="https://twitter.com/_godested"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              Twitter
            </Typography>
            <Typography
              as="a"
              href="https://www.github.com/godested"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              GitHub
            </Typography>
          </div>
        </main>
      </Hero>
    </Page>
  );
}
