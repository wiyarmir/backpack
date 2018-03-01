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
import renderer from 'react-test-renderer';

import BpkBadge, { BADGE_TYPES } from './BpkBadge';

describe('BpkBadge', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<BpkBadge>Promociando</BpkBadge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with a "centered"', () => {
    const tree = renderer
      .create(<BpkBadge centered>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with a "docked" attribute value equal to "right"', () => {
    const tree = renderer
      .create(<BpkBadge docked="right">Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with a "docked" attribute value equal to "left"', () => {
    const tree = renderer
      .create(<BpkBadge docked="left">Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when success', () => {
    const tree = renderer
      .create(<BpkBadge type={BADGE_TYPES.SUCCESS}>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when destructive', () => {
    const tree = renderer
      .create(<BpkBadge type={BADGE_TYPES.DESTRUCTIVE}>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when light', () => {
    const tree = renderer
      .create(<BpkBadge type={BADGE_TYPES.LIGHT}>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when inverse', () => {
    const tree = renderer
      .create(<BpkBadge type={BADGE_TYPES.INVERSE}>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when outline', () => {
    const tree = renderer
      .create(<BpkBadge type={BADGE_TYPES.OUTLINE}>Promociando</BpkBadge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
