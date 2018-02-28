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

import { StyleSheet } from 'react-native';

import {
  colorGray700,
  colorGray50,
  colorYellow500,
  colorRed500,
  colorGreen500,
  colorWhite,
  borderRadiusSm,
  borderSizeSm,
  spacingSm,
  spacingMd,
} from 'bpk-tokens/tokens/base.react.native';

import { setOpacity } from 'bpk-tokens';

export const styles = {
  view: StyleSheet.create({
    base: {
      paddingHorizontal: spacingMd,
      paddingVertical: spacingSm,
    },
    warning: {
      backgroundColor: colorYellow500,
    },
    success: {
      backgroundColor: colorGreen500,
    },
    destructive: {
      backgroundColor: colorRed500,
    },
    light: {
      backgroundColor: colorGray50,
    },
    inverse: {
      backgroundColor: colorWhite,
    },
    outline: {
      paddingHorizontal: spacingMd - borderSizeSm,
      paddingVertical: spacingSm - borderSizeSm,
      backgroundColor: setOpacity(colorWhite, 0.2),
    },
  }),
  text: StyleSheet.create({
    base: {
      color: colorGray700,
    },
    destructive: {
      color: colorWhite,
    },
    outline: {
      color: colorWhite,
    },
  }),
  border: StyleSheet.create({
    base: {
      borderTopLeftRadius: borderRadiusSm,
      borderBottomLeftRadius: borderRadiusSm,
      borderTopRightRadius: borderRadiusSm,
      borderBottomRightRadius: borderRadiusSm,
    },
    outline: {
      borderWidth: borderSizeSm,
      borderColor: colorWhite,
    },
    left: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: borderRadiusSm,
    },
    right: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: borderRadiusSm,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  }),
};
const addStyle = pool => (style, prop) => {
  if (!pool[prop]) return style;
  style.push(pool[prop]);
  return style;
};

export const getStyle = (docked, type) => ({
  view: [type].reduce(addStyle(styles.view), [styles.view.base]),
  text: [type].reduce(addStyle(styles.text), [styles.text.base]),
  outline: [type].reduce(addStyle(styles.border), []),
  border: [docked].reduce(addStyle(styles.border), [styles.border.base]),
});
