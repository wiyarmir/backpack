/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
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
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import AnimateHeight from './AnimateHeight';

describe('AnimateHeight', () => {
  it('should render correctly with "height" attribute equal to "auto"', () => {
    const tree = renderer
      .create(
        <AnimateHeight duration={200} height="auto">
          Content.
        </AnimateHeight>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with "height" attribute equal to "200"', () => {
    const tree = renderer
      .create(
        <AnimateHeight duration={200} height={200}>
          Content.
        </AnimateHeight>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set "display: none;" on contentElement if height is 0', () => {
    const tree = mount(
      <AnimateHeight duration={0} height={0}>
        Content.
      </AnimateHeight>,
      { lifecycleExperimental: true }, // See https://github.com/airbnb/enzyme/pull/318
    );

    expect(tree.instance().contentElement.style.display).toEqual('none');

    tree.setProps({ height: 100 }).update();

    expect(tree.instance().contentElement.style.display).toEqual('');
  });

  it('should render correctly with "transitionOverflow" attribute equal to "visible"', () => {
    const tree = renderer
      .create(
        <AnimateHeight duration={200} height={200} transitionOverflow="visible">
          Content.
        </AnimateHeight>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
