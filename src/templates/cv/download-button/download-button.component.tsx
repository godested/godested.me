import { ReactElement } from 'react';
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
    <a
      onClick={(event) => {
        event.preventDefault();
        window.open(window.location.href + url, '_blank');
      }}
      href={url}
      className={classNames(styles.downloadButton, className)}
    >
      <Typography as="span" className={styles.downloadButtonText}>
        Download
      </Typography>
      <span className={styles.downloadButtonIconWrapper}>
        <DownloadIcon className={styles.downloadButtonIcon} />
      </span>
    </a>
  );
}
