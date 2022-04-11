import { ReactElement, Ref, ElementType, ReactNode } from 'react';
import classNames from 'classnames';
import { CSSClassName } from 'common/styles';
import { assertNever, optionalMap } from 'common/utils';
import { InferProps, WithOptionalClassNameProps } from 'common/types';
import * as styles from './typography.module.scss';

export function Typography<T extends ElementType = 'h1'>({
  variant = Typography.Variant.ParagraphMD,
  fontWeight = Typography.Weight.Regular,
  as: ComponentToRender = resolveDefaultTagNameFromVariant(variant),
  fontColor,
  inline,
  italic,
  children,
  nowrap,
  className,
  innerRef,
  ...restProp
}: Typography.Props<T> & InferProps<T>): ReactElement {
  const Component = ComponentToRender as 'h1'; // hack for not working with large union
  return (
    <Component
      ref={innerRef as Ref<HTMLHeadingElement>}
      className={classNames(
        className,
        styles.typography,
        inline && styles.typographyInline,
        italic && styles.typographyItalic,
        nowrap && styles.typographyNoWrap,
        optionalMap(fontColor, resolveClassNameFromColor),
        resolveClassNameFromWeight(fontWeight),
        resolveClassNameFromVariant(variant),
      )}
      {...restProp}
    >
      {children}
    </Component>
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

  export type Props<T extends ElementType> = Readonly<
    WithOptionalClassNameProps &
      Partial<{
        as: T;
        variant: Variant;
        fontColor: Color;
        fontWeight: Weight;
        inline: true;
        italic: true;
        nowrap: true;
        children: ReactNode | undefined;
        innerRef: Ref<T>;
      }>
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
): ElementType {
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
