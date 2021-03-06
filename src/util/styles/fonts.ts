/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from '../../components/Text/Text.types';
import { IRawStyle, IFontWeight, ITheme } from 'office-ui-fabric-react/lib/Styling';

export const verticalAligns: Record<TextSize, string> = {
  xSmall: '-0.4rem',
  small: '-0.3rem',
  mediumSub: '-0.5rem',
  medium: '-0.4rem',
  large: '-0.5rem',
  xLarge: '-0.5rem',
  xxLarge: '-0.4rem',
};

export const getFont = (size: TextSize, theme: ITheme): IRawStyle =>
  theme.fonts[size === TextSize.MEDIUM_SUB ? 'smallPlus' : size];

export const textColors = (theme: ITheme): Record<TextColor, string> => ({
  primary: theme.semanticColors.bodyText,
  secondary: theme.palette.neutralPrimaryAlt,
  metadata: theme.semanticColors.bodySubtext,
  white: theme.palette.white,
  error: theme.palette.redDark,
  disabled: theme.semanticColors.disabledBodyText,
});

export const fontWeights: Record<'normal' | 'bold', IFontWeight> = {
  normal: '400',
  bold: '600',
};

export const ellipsisStyle: IRawStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
