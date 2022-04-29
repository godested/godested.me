import { Typography } from 'components/typography';
import { GatsbyImageAsset } from 'components/gatsby-asset-image';
import { assertNever } from 'utils';

export type CV = Readonly<{
  profile: CV.Profile;
  contacts: readonly CV.Contact[];
  socials: readonly CV.Social[];
  languages: readonly CV.Language[];
  body: readonly CV.Content[];
  pdfURL: string;
}>;

export namespace CV {
  export type Profile = Readonly<{
    name: string;
    position: string;
    avatar: GatsbyImageAsset;
  }>;

  export enum ContactType {
    Email = 'email',
    Phone = 'phone',
    Location = 'location',
    Site = 'site',
  }

  export namespace ContactType {
    export function toLabel(type: ContactType): string {
      switch (type) {
        case ContactType.Email:
          return 'Email';
        case ContactType.Phone:
          return 'Phone';
        case ContactType.Location:
          return 'Location';
        case ContactType.Site:
          return 'Website';
        default:
          return assertNever(type);
      }
    }
  }

  export type Contact = Readonly<{
    type: ContactType;
    value: string;
  }>;

  export type Social = Readonly<{
    icon: GatsbyImageAsset;
    profileURL: string;
    username: string;
    name: string;
  }>;

  export type Language = Readonly<{
    icon: GatsbyImageAsset;
    countryCode: string;
    name: string;
    level: string;
  }>;

  export type Content = Text | Experience | Education;

  export enum ContentType {
    Text = 'text',
    Experience = 'experience',
    Education = 'education',
  }

  type CommonContent<T extends ContentType, D> = Readonly<{
    type: T;
    title: string;
    data: readonly D[];
  }>;

  export type InnerContentDataType<
    T extends CommonContent<ContentType, unknown>,
    > = T extends CommonContent<ContentType, infer D> ? D : never;

  export type Text = CommonContent<ContentType.Text, Paragraph>;

  export type Experience = CommonContent<
    ContentType.Experience,
    {
      companyName: string;
      companyLogo: GatsbyImageAsset;
      position: string;
      description: readonly Paragraph[];
      dateStarted: number;
      dateEnded: number | undefined;
      location: string;
      companyURL?: string;
    }
  >;

  export type Education = CommonContent<
    ContentType.Education,
    {
      courseName: string;
      companyLogo: GatsbyImageAsset;
      dateStarted: number;
      dateEnded?: number;
      companyURL?: string;
      description?: string;
      certificateURL?: string;
    }
  >;

  export type Paragraph = Readonly<{
    text: string;
    variant?: Typography.Variant;
    color?: Typography.Color;
    weight?: Typography.Weight;
  }>;
}
