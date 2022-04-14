import { ReactElement } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { WithAdditionalClassNameProps } from 'types';
import DownloadIcon from 'assets/icons/download.inline.svg';
import { Typography } from 'components/typography';
import * as styles from './download-button.module.scss';

export type DownloadButtonProps = Readonly<{
  url: string;
}> &
  WithAdditionalClassNameProps;

export function DownloadButton({
  url,
  className,
}: DownloadButtonProps): ReactElement {
  return (
    /* TODO: Weird type error */
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    <Link
      target="_blank"
      rel="noopener noreferrer"
      to={url}
      className={classNames(styles.downloadButton, className)}
    >
      <Typography as="span" className={styles.downloadButtonText}>
        Download
      </Typography>
      <span className={styles.downloadButtonIconWrapper}>
        <DownloadIcon className={styles.downloadButtonIcon} />
      </span>
    </Link>
  );
}
