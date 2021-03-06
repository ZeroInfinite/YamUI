/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { PersonaCoin, PersonaSize } from 'office-ui-fabric-react/lib/PersonaCoin';
import ScreenreaderText from '../ScreenreaderText';
import { AvatarSize, AvatarProps } from './Avatar.types';
import { BorderType } from '../Image';
import { getPersonaCoinStyles, getClassNames } from './Avatar.styles';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';

const SizeMap = {
  [AvatarSize.XLARGE]: PersonaSize.size72,
  [AvatarSize.LARGE]: PersonaSize.size48,
  [AvatarSize.MEDIUM]: PersonaSize.size40,
  [AvatarSize.SMALL]: PersonaSize.size32,
  [AvatarSize.XSMALL]: PersonaSize.size24,
};

/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
export class Avatar extends React.Component<AvatarProps & CustomizableComponentProps> {
  public render() {
    const {
      badgeContent,
      imageUrl,
      name,
      badgeDescription,
      theme = defaultTheme,
      size = AvatarSize.MEDIUM,
      imageShouldFadeIn = false,
      borderType = BorderType.ROUND,
    } = this.props;
    const classNames = getClassNames({ size, theme });
    const badge = badgeContent && <div className={classNames.badge}>{badgeContent}</div>;

    return (
      <div className={`y-avatar ${classNames.root}`}>
        <PersonaCoin
          imageUrl={imageUrl}
          size={SizeMap[size]}
          hidePersonaDetails={true}
          text={name}
          imageShouldFadeIn={imageShouldFadeIn}
          styles={getPersonaCoinStyles({ borderType, size })}
        />
        {badge}
        <ScreenreaderText>{badgeDescription ? `${name} - ${badgeDescription}` : name}</ScreenreaderText>
      </div>
    );
  }
}

/**
 * An `Avatar` shows a thumbnail representation of both an individual or group.
 */
@customizable('Avatar', ['theme'])
export default class CustomizableAvatar extends Avatar {}
