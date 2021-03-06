/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface HorizontalActionListClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: HorizontalActionListClassNameProps) => {
  const { theme } = classNameProps;

  return mergeStyleSets({
    unlinkedText: {
      color: theme.semanticColors.link,
      paddingLeft: '0.2rem',
    },
    menuButton: {
      top: '0.1rem',
    },
  });
});
