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
import { Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import { BpkDialingCodeList } from './index';
import BpkDialingCodeListItem from './src/BpkDialingCodeListItem';

// Sample dialing codes, with some long ones to demonstrate how the
// component handles them.
// Out of order on purpose to demonstrate how the component
// sorts them alphabetically.
const codes = [
  { id: '213', dialingCode: '213', name: 'Algeria' },
  { id: '376', dialingCode: '376', name: 'Andorra' },
  { id: '61', dialingCode: '61', name: 'Australia' },
  { id: '32', dialingCode: '32', name: 'Belgium' },
  { id: '1', dialingCode: '1', name: 'Canada' },
  { id: '243', dialingCode: '243', name: 'Democratic Republic of the Congo' },
  { id: '20', dialingCode: '20', name: 'Egypt' },
  { id: '354', dialingCode: '354', name: 'Iceland' },
  {
    id: '991',
    dialingCode: '991',
    name:
      'International Telecommunications Public Correspondence Service trial (IPTCS)',
  },
  { id: '39', dialingCode: '39', name: 'Italy' },
  { id: '81', dialingCode: '81', name: 'Japan' },
  { id: '1784', dialingCode: '1784', name: 'Saint Vincent and the Grenadines' },
  { id: '46', dialingCode: '46', name: 'Sweden' },
  { id: '44', dialingCode: '44', name: 'United Kingdom' },
  { id: '1340', dialingCode: '1340', name: 'United States Virgin Islands' },
  { id: '99', dialingCode: '99', name: 'Wakanda' },
];

const flags = {
  '1':
    'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1000px-Flag_of_Canada.svg.png',
  '20':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.svg.png',
  '32':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/450px-Flag_of_Belgium_%28civil%29.svg.png',
  '213':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/900px-Flag_of_Algeria.svg.png',
  '243':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
  '354':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png',
  '376':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/800px-Flag_of_Andorra.svg.png',
};

class StatefulBpkDialingCodeList extends React.Component<
  {},
  {
    selectedId: ?string,
  },
> {
  constructor() {
    super();
    this.state = { selectedId: '61' };
  }
  render() {
    return (
      <BpkDialingCodeList
        codes={codes}
        selectedId={this.state.selectedId}
        onItemPress={item => {
          action(`${item.name} selected`);
          this.setState({ selectedId: item.id });
        }}
        renderFlag={item =>
          flags[item.id] ? <Image source={{ uri: flags[item.id] }} /> : null
        }
      />
    );
  }
}

storiesOf('BpkDialingCodeList', module).add('Example List', () => (
  <StatefulBpkDialingCodeList />
));

storiesOf('BpkDialingCodeListItem', module)
  .add('Standard', () => (
    <BpkDialingCodeListItem
      id="44"
      dialingCode="44"
      name="United Kingdom"
      onPress={action('Standard BpkDialingCodeListItem pressed.')}
    />
  ))
  .add('Selected', () => (
    <BpkDialingCodeListItem
      id="44"
      dialingCode="44"
      name="United Kingdom"
      onPress={action('Standard BpkDialingCodeListItem pressed.')}
      selected
    />
  ))
  .add('With flag', () => (
    <BpkDialingCodeListItem
      id="44"
      dialingCode="44"
      name="United Kingdom"
      onPress={action('Standard BpkDialingCodeListItem pressed.')}
      flag={
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
          }}
        />
      }
    />
  ))
  .add('Selected with flag', () => (
    <BpkDialingCodeListItem
      id="44"
      dialingCode="44"
      name="United Kingdom"
      onPress={action('Standard BpkDialingCodeListItem pressed.')}
      selected
      flag={
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/800px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
          }}
        />
      }
    />
  ));
