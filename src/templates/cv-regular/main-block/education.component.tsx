import { Typography } from 'components/typography';
import { ReactElement } from 'react';
import { isSomething } from 'utils';
import AttachmentIcon from 'assets/icons/attachment.inline.svg';
import { CV } from 'components/cv';
import { CompanyIcon } from './company-icon.component';
import { formatDates } from './dates';
import * as styles from './education.module.scss';

export function Education({
  companyLogoURL,
  companyURL,
  courseName,
  dateStarted,
  dateEnded,
  description,
  certificateURL,
}: CV.InnerContentDataType<CV.Education>): ReactElement {
  return (
    <div className={styles.education}>
      <div className={styles.educationContent}>
        <CompanyIcon
          title={`${courseName} logo`}
          className={styles.educationCompanyLogo}
          url={companyLogoURL}
        />
        <div className={styles.educationInfo}>
          <Typography
            as="h2"
            variant={Typography.Variant.ParagraphMD}
            fontWeight={Typography.Weight.Medium}
            fontColor={Typography.Color.Black}
            nowrap
            {...resolveCompanyProps(companyURL)}
          >
            {courseName}
          </Typography>
          {isSomething(description) && (
            <Typography
              as="h3"
              variant={Typography.Variant.CaptionSM}
              fontColor={Typography.Color.DarkGray}
              nowrap
            >
              {description}
            </Typography>
          )}
          <Typography
            variant={Typography.Variant.CaptionSM}
            fontColor={Typography.Color.Gray}
            nowrap
          >
            {formatDates(dateStarted, dateEnded)}
          </Typography>
          {isSomething(certificateURL) && (
            <Typography
              as="a"
              href={certificateURL}
              target="_blank"
              rel="noopener noreferrer"
              variant={Typography.Variant.CaptionSM}
              className={styles.educationCertificate}
              nowrap
            >
              <span className={styles.educationCertificateIconContainer}>
                <AttachmentIcon
                  role="img"
                  className={styles.educationCertificateIcon}
                />
              </span>
              <span>Course certificate</span>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

function resolveCompanyProps(companyURL: string | undefined): Typography.Props {
  return isSomething(companyURL)
    ? {
        as: 'a',
        href: companyURL,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};
}
