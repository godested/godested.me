import { ReactElement, Ref, ReactNode, ElementType } from 'react';
import classNames from 'classnames';
import { CSSClassName } from 'styles';
import { assertNever, optionalMap } from 'utils';
import { WithOptionalClassNameProps, PolymorphicComponentProps } from 'types';
import * as styles from './typography.module.scss';

export function Typography<T extends ElementType = 'p'>(
  props: Typography.Props<T>,
): ReactElement {
  const {
    variant = Typography.Variant.ParagraphMD,
    fontWeight = Typography.Weight.Regular,
    as: Tag = resolveDefaultTagNameFromVariant(variant),
    fontColor,
    inline,
    italic,
    children,
    nowrap,
    className,
    innerRef,
    ...restProps
  } = props;

  const ComponentToRender = Tag as 'p';

  return (
    <ComponentToRender
      ref={innerRef as Ref<HTMLHeadingElement>}
      className={classNames(
        className,
        styles.typography,
        inline && styles.typographyInline,
        italic && styles.typographyItalic,
        nowrap && styles.typographyNoWrap,
        'href' in restProps && styles.typographyLinked,
        optionalMap(fontColor, resolveClassNameFromColor),
        resolveClassNameFromWeight(fontWeight),
        resolveClassNameFromVariant(variant),
      )}
      {...restProps}
    >
      {children}
    </ComponentToRender>
  );
}

export namespace Typography {
  export enum Variant {
    Heading,
    Title,
    Caption,
    ParagraphMD,
    ParagraphSM,
  }

  export enum Weight {
    ExtraLight,
    Light,
    Thin,
    Regular,
    Medium,
    DemiBold,
    Bold,
    ExtraBold,
    Black,
  }

  export enum Color {
    Black,
    DarkGray,
    Gray,
    LightGray,
    Accent,
    White,
  }

  export type Props<T extends ElementType> = PolymorphicComponentProps<
    T,
    Readonly<
      WithOptionalClassNameProps &
        Partial<{
          variant: Variant;
          fontColor: Color;
          fontWeight: Weight;
          inline: true;
          italic: true;
          nowrap: true;
          children: ReactNode | undefined;
          innerRef: Ref<T>;
        }>
    >
  >;
}

function resolveClassNameFromVariant(
  variant: Typography.Variant,
): CSSClassName {
  switch (variant) {
    case Typography.Variant.Heading:
      return styles.typographyHeading;
    case Typography.Variant.Title:
      return styles.typographyTitle;
    case Typography.Variant.Caption:
      return styles.typographyCaption;
    case Typography.Variant.ParagraphSM:
      return styles.typographyParagraphSm;
    case Typography.Variant.ParagraphMD:
      return styles.typographyParagraphMd;
    default:
      return assertNever(variant);
  }
}

function resolveClassNameFromWeight(weight: Typography.Weight): CSSClassName {
  switch (weight) {
    case Typography.Weight.ExtraLight:
      return styles.typographyExtraLight;
    case Typography.Weight.Light:
      return styles.typographyLight;
    case Typography.Weight.Thin:
      return styles.typographyThin;
    case Typography.Weight.Regular:
      return styles.typographyRegular;
    case Typography.Weight.Medium:
      return styles.typographyMedium;
    case Typography.Weight.DemiBold:
      return styles.typographyDemiBold;
    case Typography.Weight.Bold:
      return styles.typographyBold;
    case Typography.Weight.ExtraBold:
      return styles.typographyExtraBold;
    case Typography.Weight.Black:
      return styles.typographyBlack;
    default:
      return assertNever(weight);
  }
}

function resolveClassNameFromColor(color: Typography.Color): CSSClassName {
  switch (color) {
    case Typography.Color.Black:
      return styles.typographyBlackColor;
    case Typography.Color.DarkGray:
      return styles.typographyDarkGrayColor;
    case Typography.Color.Gray:
      return styles.typographyGrayColor;
    case Typography.Color.LightGray:
      return styles.typographyLightGrayColor;
    case Typography.Color.Accent:
      return styles.typographyAccentColor;
    case Typography.Color.White:
      return styles.typographyWhiteColor;
    default:
      return assertNever(color);
  }
}

function resolveDefaultTagNameFromVariant(
  variant: Typography.Variant,
): keyof JSX.IntrinsicElements {
  switch (variant) {
    case Typography.Variant.Heading:
      return 'h2';
    case Typography.Variant.Title:
      return 'h3';
    case Typography.Variant.Caption:
      return 'h4';
    case Typography.Variant.ParagraphMD:
    case Typography.Variant.ParagraphSM:
      return 'p';
    default:
      return assertNever(variant);
  }
}
