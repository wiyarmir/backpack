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

import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-badge.scss';

export const BADGE_TYPES = {
  WARNING: 'warning',
  SUCCESS: 'success',
  DESTRUCTIVE: 'destructive',
  LIGHT: 'light',
  INVERSE: 'inverse',
  OUTLINE: 'outline',
};

const getClassName = cssModules(STYLES);

const badgeTypeClassNames = {
  [BADGE_TYPES.WARNING]: null,
  [BADGE_TYPES.SUCCESS]: getClassName('bpk-badge--success'),
  [BADGE_TYPES.DESTRUCTIVE]: getClassName('bpk-badge--destructive'),
  [BADGE_TYPES.LIGHT]: getClassName('bpk-badge--light'),
  [BADGE_TYPES.INVERSE]: getClassName('bpk-badge--inverse'),
  [BADGE_TYPES.OUTLINE]: getClassName('bpk-badge--outline'),
};

const BpkBadge = props => {
  const { type, docked, centered, className, ...rest } = props;
  const classNames = [getClassName('bpk-badge'), badgeTypeClassNames[type]];

  if (docked === 'right') {
    classNames.push(getClassName('bpk-badge--docked-right'));
  }
  if (docked === 'left') {
    classNames.push(getClassName('bpk-badge--docked-left'));
  }
  if (centered) {
    classNames.push(getClassName('bpk-badge--centered'));
  }
  if (className) {
    classNames.push(className);
  }

  return <span className={classNames.join(' ')} {...rest} />;
};

BpkBadge.propTypes = {
  type: PropTypes.oneOf([
    BADGE_TYPES.WARNING,
    BADGE_TYPES.SUCCESS,
    BADGE_TYPES.DESTRUCTIVE,
    BADGE_TYPES.LIGHT,
    BADGE_TYPES.INVERSE,
    BADGE_TYPES.OUTLINE,
  ]),
  docked: PropTypes.oneOf(['right', 'left', null]),
  centered: PropTypes.bool,
  className: PropTypes.string,
};

BpkBadge.defaultProps = {
  type: BADGE_TYPES.WARNING,
  docked: null,
  centered: false,
  className: null,
};

export default BpkBadge;
