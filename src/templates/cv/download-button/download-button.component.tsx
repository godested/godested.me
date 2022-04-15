import { ReactElement } from 'react';
import classNames from 'classnames';
import { WithOptionalClassNameProps } from 'types';
import DownloadIcon from 'assets/icons/download.inline.svg';
import * as styles from './download-button.module.scss';

export type DownloadButtonProps = Readonly<{
  url: string;
}> &
  WithOptionalClassNameProps;

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
      Download CV
      <DownloadIcon className={styles.downloadButtonIcon} />
    </a>
  );
}
