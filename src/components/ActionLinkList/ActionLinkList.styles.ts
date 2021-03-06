/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    root: {
      selectors: {
        '.y-actionLink': {
          padding: '0.2rem 0 0.6rem',
        },
      },
    },
  });
});
