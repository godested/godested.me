import { ElementType, ReactElement } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { PropsOf, WithAdditionalClassNameProps } from 'types';
import { Typography } from 'components/typography';
import { assertNever, unwrap } from 'utils';
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
          <GatsbyImage
            image={unwrap(getImage(profile.avatar), 'Avatar')}
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
            {contacts
              .map(
                (contact) =>
                  [contact, resolveContactRenderData(contact)] as const,
              )
              .map(([contact, itemProps]) => (
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
                  {...itemProps}
                  className={classNames(
                    styles.contactLink,
                    itemProps.className,
                  )}
                >
                  <Typography
                    variant={Typography.Variant.CaptionSM}
                    fontColor={Typography.Color.LightGray}
                  >
                    {CV.ContactType.toLabel(contact.type)}
                  </Typography>
                  <Typography
                    as="h5"
                    variant={Typography.Variant.ParagraphSM}
                    fontWeight={Typography.Weight.Medium}
                  >
                    {itemProps.children}
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
                as="a"
                href={profileURL}
                target="_blank"
                rel="noopener noreferrer"
                className={classNames(
                  classNames(styles.contactLink, styles.contactLinkHoverable),
                )}
                key={name}
              >
                <Typography
                  variant={Typography.Variant.CaptionSM}
                  fontColor={Typography.Color.LightGray}
                >
                  {name}
                </Typography>
                <Typography
                  variant={Typography.Variant.ParagraphSM}
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
                  variant={Typography.Variant.ParagraphSM}
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

function resolveContactRenderData(
  contact: CV.Contact,
): { as: ElementType } & PropsOf<'a' | 'div'> {
  const { type, value } = contact;

  switch (type) {
    case CV.ContactType.Email:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `mailto:${value}`,
        className: styles.contactLinkHoverable,
        children: value,
      };
    case CV.ContactType.Phone:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: `tel:${value}`,
        className: styles.contactLinkHoverable,
        children: value,
      };
    case CV.ContactType.Site:
      return {
        as: 'a',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: value,
        className: styles.contactLinkHoverable,
        children: new URL(value).host,
      };
    case CV.ContactType.Location:
      return {
        as: 'div',
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
