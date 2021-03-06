import { ReactElement } from 'react';
import { Typography } from 'components/typography';
import { Hero } from 'components/hero';
import { Page } from 'components/page';
import { Link } from 'gatsby';

export default function NotFoundPage(): ReactElement {
  return (
    <Page title="404">
      <Hero>
        <main>
          <Typography
            variant={Typography.Variant.Heading}
            fontWeight={Typography.Weight.Medium}
            fontColor={Typography.Color.White}
          >
            Ooooops... 404
          </Typography>
          <Typography
            as={Link}
            to="/"
            variant={Typography.Variant.ParagraphMD}
            fontColor={Typography.Color.White}
          >
            Home
          </Typography>
        </main>
      </Hero>
    </Page>
  );
}
