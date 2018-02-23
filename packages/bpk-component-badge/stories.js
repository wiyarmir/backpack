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

import React from 'react';
import { storiesOf } from '@storybook/react';

import BpkBadge, { BADGE_TYPES } from './index';
import BadgeLayout from './BadgeLayout';

storiesOf('bpk-component-badge', module)
  .add('Default', () => (
    <BadgeLayout>
      <div>
        This is a badge <BpkBadge>Promocionado</BpkBadge>
      </div>
    </BadgeLayout>
  ))
  .add('Centered', () => (
    <BadgeLayout>
      <div>
        This is a badge <BpkBadge centered>Promocionado</BpkBadge>
      </div>
    </BadgeLayout>
  ))
  .add('Docked right', () => (
    <BadgeLayout docked>
      <BpkBadge docked="right">Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('Docked left', () => (
    <BadgeLayout docked>
      <BpkBadge docked="left">Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('Green', () => (
    <BadgeLayout>
      <BpkBadge type={BADGE_TYPES.GREEN}>Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('Red', () => (
    <BadgeLayout>
      <BpkBadge type={BADGE_TYPES.RED}>Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('Gray', () => (
    <BadgeLayout>
      <BpkBadge type={BADGE_TYPES.GRAY}>Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('White', () => (
    <BadgeLayout>
      <BpkBadge type={BADGE_TYPES.WHITE}>Promocionado</BpkBadge>
    </BadgeLayout>
  ))
  .add('Outline', () => (
    <BadgeLayout>
      <BpkBadge type={BADGE_TYPES.OUTLINE}>Promocionado</BpkBadge>
    </BadgeLayout>
  ));
