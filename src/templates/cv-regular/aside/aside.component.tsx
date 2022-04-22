import { ReactElement } from 'react';
import Image from 'gatsby-image';
import classNames from 'classnames';
import { PropsOf, WithAdditionalClassNameProps } from 'types';
import { Typography } from 'components/typography';
import { assertNever } from 'utils';
import LocationIcon from 'assets/icons/location.inline.svg';
import MailIcon from 'assets/icons/mail.inline.svg';
import PhoneIcon from 'assets/icons/phone.inline.svg';
import BrowseIcon from 'assets/icons/browse.inline.svg';
import UkraineIcon from 'assets/flags/ukraine.inline.svg';
import EnglandIcon from 'assets/flags/england.inline.svg';
import { CV, useCV } from 'components/cv';
import { AsideBlock } from './block.component';
import { AsideList } from './list.component';
import * as styles from './aside.module.scss';

export function AsideComponent({
  asideClassName,
}: WithAdditionalClassNameProps<['asideClassName']>): ReactElement {
  const { profile, contacts, socials, languages } = useCV();

  return (
    <aside className={classNames(styles.aside, asideClassName)}>
      <div className={styles.asideContent}>
        <AsideBlock>
          <Image
            fluid={profile.avatar}
            alt={profile.name}
            className={styles.profileAvatar}
            backgroundColor
          />
          <Typography
            as="h1"
            variant={Typography.Variant.Heading}
            fontWeight={Typography.Weight.Medium}
            fontColor={Typography.Color.Black}
          >
            {profile.name}
          </Typography>
          <Typography
            as="h2"
            variant={Typography.Variant.Title}
            fontWeight={Typography.Weight.Medium}
            className={styles.position}
          >
            {profile.position}
          </Typography>
        </AsideBlock>
        <AsideBlock title="Contacts">
          <AsideList>
            {contacts.map((contact) => (
              <AsideList.ItemWithIcon
                icon={
                  <span className={styles.iconContainer}>
                    <ContactIcon
                      type={contact.type}
                      role="img"
                      className={styles.iconContainerIcon}
                    />
                  </span>
                }
                key={contact.type}
              >
                <Typography
                  variant={Typography.Variant.CaptionSM}
                  fontColor={Typography.Color.LightGray}
                >
                  {CV.ContactType.toLabel(contact.type)}
                </Typography>
                <Typography
                  as="h5"
                  variant={Typography.Variant.ParagraphMD}
                  fontColor={Typography.Color.DarkGray}
                  fontWeight={Typography.Weight.Medium}
                  {...resolveContactProps(contact)}
                />
              </AsideList.ItemWithIcon>
            ))}
          </AsideList>
        </AsideBlock>
        <AsideBlock title="Socials">
          <AsideList>
            {socials.map(({ name, profileURL, username, iconURL }) => (
              <AsideList.ItemWithIcon
                icon={
                  <img src={iconURL} alt={name} className={styles.socialIcon} />
                }
                key={name}
              >
                <Typography
                  variant={Typography.Variant.CaptionSM}
                  fontColor={Typography.Color.LightGray}
                >
                  {name}
                </Typography>
                <Typography
                  as="a"
                  href={profileURL}
                  variant={Typography.Variant.ParagraphMD}
                  fontColor={Typography.Color.DarkGray}
                  fontWeight={Typography.Weight.Medium}
                >
                  {username}
                </Typography>
              </AsideList.ItemWithIcon>
            ))}
          </AsideList>
        </AsideBlock>
        <AsideBlock title="Languages">
          <AsideList>
            {languages.map(({ name, level, type }) => (
              <AsideList.ItemWithIcon
                icon={<FlagIcon type={type} className={styles.flagIcon} />}
                key={name}
              >
                <Typography
                  as="h5"
                  variant={Typography.Variant.ParagraphMD}
                  fontColor={Typography.Color.DarkGray}
                  fontWeight={Typography.Weight.Medium}
                >
                  {name}
                </Typography>
                <Typography
                  variant={Typography.Variant.CaptionSM}
                  fontColor={Typography.Color.LightGray}
                >
                  {level}
                </Typography>
              </AsideList.ItemWithIcon>
            ))}
          </AsideList>
        </AsideBlock>
      </div>
    </aside>
  );
}

function resolveContactProps(contact: CV.Contact): Typography.Props<'a'> {
  const { type, value } = contact;

  switch (type) {
    case CV.ContactType.Email:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `mailto:${value}`,
        children: value,
      };
    case CV.ContactType.Phone:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `tel:${value}`,
        children: value,
      };
    case CV.ContactType.Site:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: value,
        children: new URL(value).host,
      };
    case CV.ContactType.Location:
      return {
        children: value,
      };
    default:
      return assertNever(type);
  }
}

function ContactIcon({
  type,
  ...props
}: Readonly<{ type: CV.ContactType }> &
  WithAdditionalClassNameProps &
  PropsOf<'svg'>): ReactElement {
  switch (type) {
    case CV.ContactType.Email:
      return <MailIcon {...props} />;
    case CV.ContactType.Phone:
      return <PhoneIcon {...props} />;
    case CV.ContactType.Location:
      return <LocationIcon {...props} />;
    case CV.ContactType.Site:
      return <BrowseIcon {...props} />;
    default:
      return assertNever(type);
  }
}

function FlagIcon({
  type,
  ...props
}: Readonly<{ type: CV.LanguageType }> &
  WithAdditionalClassNameProps): ReactElement {
  switch (type) {
    case CV.LanguageType.English:
      return <EnglandIcon {...props} />;
    case CV.LanguageType.Ukrainian:
      return <UkraineIcon {...props} />;
    default:
      return assertNever(type);
  }
}
