import { ReactElement } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { Typography } from 'components/typography';
import { Hero } from 'components/hero';
import { Page } from 'components/page';
import * as styles from './_main.module.scss';

// TODO: link-component

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
            Ilya Zaitsev
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
              to="/cv-ilya-zaitsev"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              CV / Résumé
            </Typography>
            <Typography
              as={OutboundLink}
              href="https://instagram.com/ztsvi"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              Instagram
            </Typography>
            <Typography
              as={OutboundLink}
              href="https://twitter.com/_godested"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              Twitter
            </Typography>
            <Typography
              as={OutboundLink}
              href="https://www.github.com/godested"
              variant={Typography.Variant.ParagraphMD}
              className={styles.link}
            >
              GitHub
            </Typography>
          </div>
          <div className={styles.spotifyPlaylistContainer}>
            <SpotifyPlaylist />
            <span className={styles.loader} />
          </div>
        </main>
      </Hero>
    </Page>
  );
}

function SpotifyPlaylist(): ReactElement {
  return (
    <iframe
      title="Ilya Zaitsev - Spotify Playlist"
      src="https://open.spotify.com/embed/playlist/2al6NWOKIZfDORjkMKpNs6?theme=0"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className={styles.spotifyPlaylist}
    />
  );
}
