import { ReactElement } from 'react';
import { Typography } from 'common/components/typography';
import { Hero } from 'common/components/hero';
import { Page } from 'common/components/page';
import { Link } from 'gatsby';

export default function MainPage(): ReactElement {
  return (
    <Page title="Zaitsev Ilya">
      <Hero>
        <main>
          <Typography
            variant={Typography.Variant.Heading}
            fontWeight={Typography.Weight.Medium}
            fontColor={Typography.Color.White}
          >
            Ilya Zaitsev
          </Typography>
          {/* TODO: Weird type error */}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Typography
            as={Link}
            to="/cv"
            variant={Typography.Variant.ParagraphMD}
            fontColor={Typography.Color.White}
          >
            Resume
          </Typography>
        </main>
      </Hero>
    </Page>
  );
}
