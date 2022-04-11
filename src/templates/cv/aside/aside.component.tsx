import { ReactElement } from 'react';
import classNames from 'classnames';
import { WithAdditionalClassNameProps } from 'common/types';
import { Typography } from 'common/components/typography';
import { assertNever } from 'common/utils';
import LocationIcon from 'common/assets/icons/location.inline.svg';
import MailIcon from 'common/assets/icons/mail.inline.svg';
import PhoneIcon from 'common/assets/icons/phone.inline.svg';
import UkraineIcon from 'common/assets/flags/ukraine.inline.svg';
import EnglandIcon from 'common/assets/flags/england.inline.svg';
import { AsideBlock } from './block/block.component';
import { AsideList } from './list/list.component';
import { useCV } from '../cv.provider';
import * as styles from './aside.module.scss';
import { CV } from '../types';

export function AsideComponent({
  asideClassName,
}: WithAdditionalClassNameProps<['asideClassName']>): ReactElement {
  const { profile, contacts, socials, languages } = useCV();

  return (
    <aside className={classNames(styles.aside, asideClassName)}>
      <AsideBlock>
        <img
          src={profile.avatarURL}
          alt={profile.name}
          className={styles.profileAvatar}
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
                    className={styles.iconContainerIcon}
                  />
                </span>
              }
              key={contact.type}
            >
              <Typography
                variant={Typography.Variant.Caption}
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
              >
                {contact.value}
              </Typography>
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
                variant={Typography.Variant.Caption}
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
                variant={Typography.Variant.Caption}
                fontColor={Typography.Color.LightGray}
              >
                {level}
              </Typography>
            </AsideList.ItemWithIcon>
          ))}
        </AsideList>
      </AsideBlock>
    </aside>
  );
}

function resolveContactProps(
  contact: CV.Contact,
): Typography.Props<'h2' | 'a'> {
  const { type, value } = contact;

  switch (type) {
    case CV.ContactType.Email:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `mailto:${value}`,
      };
    case CV.ContactType.Phone:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `tel:${value}`,
      };
    case CV.ContactType.Location:
      return {};
    default:
      return assertNever(type);
  }
}

function ContactIcon({
  type,
  ...props
}: Readonly<{ type: CV.ContactType }> &
  WithAdditionalClassNameProps): ReactElement {
  switch (type) {
    case CV.ContactType.Email:
      return <MailIcon {...props} />;
    case CV.ContactType.Phone:
      return <PhoneIcon {...props} />;
    case CV.ContactType.Location:
      return <LocationIcon {...props} />;
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
