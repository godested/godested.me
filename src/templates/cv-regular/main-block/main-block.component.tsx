import { PropsWithChildren, ReactElement, ReactNode, SVGProps } from 'react';
import { Typography } from 'components/typography';
import { assertNever, getDateMonth, isSomething, isNumber } from 'utils';
import { SVGDefs } from 'components/svg-defs';
import AttachmentIcon from 'assets/icons/attachment.inline.svg';
import { CV } from '../types';
import * as styles from './main-block.module.scss';

type MainBlockProps = PropsWithChildren<Readonly<{ content: CV.Content }>>;

export function MainBlock({ content }: MainBlockProps): ReactElement {
  const renderContent = (): ReactNode => {
    const { type } = content;

    switch (type) {
      case CV.ContentType.Text:
        return content.data.map(({ variant, color, weight, text }, index) => (
          <Typography
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            variant={variant ?? Typography.Variant.ParagraphMD}
            fontColor={color}
            fontWeight={weight}
            className={styles.paragraph}
          >
            {text}
          </Typography>
        ));
      case CV.ContentType.Education:
        return (
          <ul className={styles.educationList}>
            {content.data.map((education, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={styles.educationListItem}
              >
                <Education
                  companyLogoURL={education.companyLogoURL}
                  companyURL={education.companyURL}
                  courseName={education.courseName}
                  dateStarted={education.dateStarted}
                  dateEnded={education.dateEnded}
                  description={education.description}
                  certificateURL={education.certificateURL}
                />
              </li>
            ))}
          </ul>
        );
      case CV.ContentType.Experience:
        return (
          <ul className={styles.experienceList}>
            {content.data.map((experience, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={styles.experienceListItem}
              >
                <Experience
                  companyName={experience.companyName}
                  companyLogoURL={experience.companyLogoURL}
                  companyURL={experience.companyURL}
                  dateStarted={experience.dateStarted}
                  dateEnded={experience.dateEnded}
                  description={experience.description}
                  location={experience.location}
                  position={experience.position}
                />
              </li>
            ))}
          </ul>
        );
      default:
        return assertNever(type);
    }
  };

  return (
    <section className={styles.mainBlock}>
      <Typography
        variant={Typography.Variant.Title}
        fontColor={Typography.Color.Black}
        fontWeight={Typography.Weight.Medium}
        className={styles.title}
      >
        {content.title}
      </Typography>
      {renderContent()}
    </section>
  );
}

function Experience({
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
          <div className={styles.experienceCompany}>
            <Icon
              className={styles.experienceCompanyLogo}
              url={companyLogoURL}
            />
            <div className={styles.experienceCompanyInfo}>
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
                variant={Typography.Variant.Caption}
                fontColor={Typography.Color.LightGray}
                nowrap
              >
                {position}
              </Typography>
            </div>
          </div>
          <div className={styles.experienceMetrics}>
            <Typography
              variant={Typography.Variant.Caption}
              fontColor={Typography.Color.LightGray}
              className={styles.experienceMetric}
              nowrap
            >
              {formatDates(dateStarted, dateEnded ?? 'Present')}
              {' · '}
              {formatDuration(dateStarted, dateEnded)}
            </Typography>
            <Typography
              variant={Typography.Variant.Caption}
              fontColor={Typography.Color.LightGray}
              className={styles.experienceMetric}
              nowrap
            >
              {location}
            </Typography>
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

function Education({
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
        <Icon className={styles.educationCompanyLogo} url={companyLogoURL} />
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
          <Typography
            variant={Typography.Variant.Caption}
            fontColor={Typography.Color.Gray}
            nowrap
          >
            {formatDates(dateStarted, dateEnded)}
          </Typography>
          {isSomething(description) && (
            <Typography
              as="h3"
              variant={Typography.Variant.Caption}
              fontColor={Typography.Color.DarkGray}
              nowrap
            >
              {description}
            </Typography>
          )}
          {isSomething(certificateURL) && (
            <Typography
              as="a"
              href={certificateURL}
              target="_blank"
              rel="noopener noreferrer"
              variant={Typography.Variant.Caption}
              className={styles.educationCertificate}
              nowrap
            >
              <span className={styles.educationCertificateIconContainer}>
                <AttachmentIcon className={styles.educationCertificateIcon} />
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

function Icon({
  url,
  ...props
}: Readonly<{ url: string }> & SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <SVGDefs singleton id="IconShape">
        <clipPath id="icon-shape">
          <path
            fill="#000"
            d="M6.086 23.915c-1.428-.065-2.203-.302-2.719-.503a4.547 4.547 0 01-1.683-1.095c-.513-.512-.83-1-1.095-1.683-.201-.516-.438-1.291-.503-2.718C.014 16.373 0 15.91 0 12 0 8.092.016 7.63.085 6.086.15 4.658.389 3.885.588 3.367a4.565 4.565 0 011.095-1.684c.512-.512 1-.83 1.684-1.095.515-.2 1.29-.438 2.718-.503C7.63.015 8.092 0 12 0c3.909 0 4.37.016 5.915.085 1.427.065 2.201.304 2.718.503a4.53 4.53 0 011.684 1.095c.512.512.828 1 1.095 1.684.2.515.438 1.29.503 2.718C23.985 7.63 24 8.092 24 12s-.014 4.371-.085 5.916c-.065 1.427-.304 2.202-.503 2.718a4.538 4.538 0 01-1.095 1.683 4.54 4.54 0 01-1.684 1.095c-.515.2-1.29.438-2.718.503-1.543.07-2.006.085-5.915.085-3.908 0-4.371-.014-5.914-.085z"
          />
        </clipPath>
      </SVGDefs>
      <g clipPath="url(#icon-shape)">
        <rect x="0" y="0" width="200" height="100" fill="transparent" />
        <image href={url} height="100%" width="100%" />
      </g>
    </svg>
  );
}

function formatDates(
  dateStarted: number,
  dateEnded: number | string | undefined,
): string {
  return [
    formatDateFromTimestamp(dateStarted),
    isNumber(dateEnded) ? formatDateFromTimestamp(dateEnded) : dateEnded,
  ]
    .filter(isSomething)
    .join(' - ');
}

function formatDateFromTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return `${getDateMonth(date).substring(0, 3)} ${date.getUTCFullYear()}`;
}

function formatDuration(timestampA: number, timestampB = Date.now()): string {
  const difference = Math.abs(timestampA - timestampB);
  const mothsDifference = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);

  const years = Math.floor(mothsDifference / 12);
  const months = (mothsDifference % 12) + 1;

  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : undefined,
    `${months} ${months > 1 ? 'mos' : 'mon'}`,
  ]
    .filter(isSomething)
    .join(' ');
}
