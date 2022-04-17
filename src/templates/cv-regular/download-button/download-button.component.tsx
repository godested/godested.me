import { ReactElement } from 'react';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
    <OutboundLink
      href={pathPrefix + url}
      target="_blank"
      className={classNames(styles.downloadButton, className)}
    >
      Download CV
      <DownloadIcon className={styles.downloadButtonIcon} />
    </OutboundLink>
  );
}
