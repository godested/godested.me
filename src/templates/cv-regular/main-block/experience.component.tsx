import { ReactElement, useMemo } from 'react';
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
  companyLogo,
  companyURL,
  position,
  description,
  dateStarted,
  dateEnded,
  location,
}: CV.InnerContentDataType<CV.Experience>): ReactElement {
  const fromDate = useMemo(() => new Date(dateStarted), [dateStarted]);
  const toDate = useMemo(
    () => (dateEnded ? new Date(dateEnded) : undefined),
    [dateEnded],
  );

  return (
    <div className={styles.experience}>
      <div className={styles.experienceContent}>
        <div className={styles.experienceHeader}>
          <CompanyIcon
            alt={`${companyName} logo`}
            className={styles.experienceCompanyLogo}
            source={companyLogo}
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
                {formatDates(fromDate, toDate ?? 'Present')}
                {' · '}
                {formatDuration(fromDate, toDate)}
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
