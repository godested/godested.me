import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Typography } from 'components/typography';
import { assertNever } from 'utils';
import { CV } from 'components/cv';
import * as styles from './main-block.module.scss';
import { Education } from './education.component';
import { Experience } from './experience.component';

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
                  companyLogo={education.companyLogo}
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
                  companyLogo={experience.companyLogo}
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
        as="h3"
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
