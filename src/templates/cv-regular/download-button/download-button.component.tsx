import { ReactElement } from 'react';
import classNames from 'classnames';
import { WithOptionalClassNameProps } from 'types';
import { useSitePathPrefix } from 'hooks';
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
  const pathPrefix = useSitePathPrefix();

  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        window.open(event.currentTarget.href, '_blank');
      }}
      href={pathPrefix + url}
      className={classNames(styles.downloadButton, className)}
    >
      Download CV
      <DownloadIcon className={styles.downloadButtonIcon} />
    </a>
  );
}
