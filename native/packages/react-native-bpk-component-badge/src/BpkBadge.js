/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2018 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import BpkText from 'react-native-bpk-component-text';
import { getStyle } from './styles';

export const BADGE_TYPES = {
  success: 'success',
  warning: 'warning',
  destructive: 'destructive',
  light: 'light',
  inverse: 'inverse',
  outline: 'outline',
};

export const BADGE_DOCKED_TYPES = {
  left: 'left',
  right: 'right',
};

export type Props = {
  message: string,
  docked: $Keys<typeof BADGE_DOCKED_TYPES>,
  type: $Keys<typeof BADGE_TYPES>,
  style: ?(Object | Array<Object>),
};

const BpkBadge = (props: Props) => {
  const { message, docked, type, style: userStyle } = props;
  const {
    border: borderStyle,
    view: innerStyle,
    text: textStyle,
    outline: outlineStyle,
  } = getStyle(docked, type);

  const innerViewStyle =
    type === BADGE_TYPES.outline
      ? [innerStyle, outlineStyle, borderStyle]
      : [innerStyle, borderStyle];

  return (
    <View style={userStyle}>
      <View style={innerViewStyle}>
        <BpkText style={textStyle} textStyle="xs">
          {message}
        </BpkText>
      </View>
    </View>
  );
};

const propTypes = {
  message: PropTypes.string.isRequired,
  docked: PropTypes.oneOf(Object.keys(BADGE_DOCKED_TYPES)),
  style: ViewPropTypes.style,
  type: PropTypes.oneOf(Object.keys(BADGE_TYPES)),
};

BpkBadge.propTypes = propTypes;

BpkBadge.defaultProps = {
  docked: null,
  type: BADGE_TYPES.warning,
  style: null,
};

export default BpkBadge;
export { propTypes };
