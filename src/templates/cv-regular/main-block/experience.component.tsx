import { ReactElement } from 'react';
import classNames from 'classnames';
import { Typography } from 'components/typography';
import LocationIcon from 'assets/icons/location.inline.svg';
import { isSomething } from 'utils';
import { CV } from 'components/cv';
import { CompanyIcon } from './company-icon.component';
import { formatDates, formatDuration } from './dates';
import * as styles from './experience.module.scss';

export function Experience({
  companyName,
  companyLogoURL,
  companyURL,
  position,
  description,
  dateStarted,
  dateEnded,
  location,
}: CV.InnerContentDataType<CV.Experience>): ReactElement {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceHeader}>
          <CompanyIcon
            title={`${companyName} logo`}
            className={styles.experienceCompanyLogo}
            url={companyLogoURL}
          />
          <div className={styles.experienceCompanyInfo}>
            <div>
              <Typography
                as="h2"
                variant={Typography.Variant.ParagraphMD}
                fontWeight={Typography.Weight.Medium}
                fontColor={Typography.Color.Black}
                className={styles.experienceCompanyName}
                nowrap
                {...resolveCompanyProps(companyURL)}
              >
                {companyName}
              </Typography>
              <Typography
                as="h3"
                variant={Typography.Variant.CaptionMD}
                fontColor={Typography.Color.DarkGray}
                nowrap
              >
                {position}
              </Typography>
            </div>
            <div className={styles.experienceMetrics}>
              <Typography
                variant={Typography.Variant.CaptionSM}
                fontColor={Typography.Color.LightGray}
                className={classNames(
                  styles.experienceMetric,
                  styles.experienceDates,
                )}
                nowrap
              >
                {formatDates(dateStarted, dateEnded ?? 'Present')}
                {' · '}
                {formatDuration(dateStarted, dateEnded)}
              </Typography>
              <Typography
                variant={Typography.Variant.CaptionSM}
                fontColor={Typography.Color.LightGray}
                className={classNames(
                  styles.experienceMetric,
                  styles.experienceLocation,
                )}
                nowrap
              >
                <LocationIcon
                  role="img"
                  className={styles.experienceMetricIcon}
                />
                {location}
              </Typography>
            </div>
          </div>
        </div>
        <div>
          {description.map(({ variant, color, weight, text }, index) => (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant={variant ?? Typography.Variant.ParagraphSM}
              fontColor={color}
              fontWeight={weight}
              className={styles.experienceParagraph}
            >
              {text}
            </Typography>
          ))}
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
