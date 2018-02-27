# react-native-bpk-component-phone-input

> Backpack React Native telephone input component.

## Installation

```sh
npm install react-native-bpk-component-phone-input --save-dev
```

## BpkDialingCodeList

### Usage

```js
import React, { Component } from 'react';
import { View } from 'react-native';
import { BpkDialingCodeList } from 'react-native-bpk-component-phone-input';

const CODES = [
  { id: '213', dialingCode: '213', name: 'Algeria' },
  { id: '1', dialingCode: '1', name: 'Canada' },
  { id: '243', dialingCode: '243', name: 'Democratic Republic of the Congo' },
  { id: '39', dialingCode: '39', name: 'Italy' },
  { id: '81', dialingCode: '81', name: 'Japan' },
  { id: '46', dialingCode: '46', name: 'Sweden' },
  { id: '44', dialingCode: '44', name: 'United Kingdom' },
];

const FLAG_IMAGES = {
  '213': '/resources/algeria.png',
  '1': '/resources/canada.png',
  '243': '/resources/drcongo.png',
  '39': '/resources/italy.png',
  '81': '/resources/japan.png',
  '46': '/resources/sweden.png',
  '44': '/resources/uk.png',
};

export default class App extends Component {
  render() {
    return (
      <BpkDialingCodeList
        codes={CODES}
        selectedId="243"
        onItemPress={code => console.log(code.id)}
        renderFlag={code => <Image source={require(FLAG_IMAGES[code.id])} />}
      />
    );
  }
}
```

### Props


| Property                    | PropType                                                    | Required | Default Value |
| --------------------------- | ----------------------------------------------------------- | -------- | ------------- |
| codes                       | arrayOf({id, diallingCode, name})                           | true     | -             |
| onItemPress                 | func                                                        | true     | -             |
| renderFlag                  | func                                                        | true     | -             |
| selectedId                  | string                                                      | false    | null          |

