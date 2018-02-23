# bpk-component-badge

> Backpack badge component.

## Installation

```sh
npm install bpk-component-badge --save-dev
```

## Usage

```js
import React from 'react';
import BpkBadge from 'bpk-component-badge';

export default () => <BpkBadge>My Badge</BpkBadge>;
```

## Props

| Property  | PropType           | Required | Default Value      |
| --------- | ------------------ | -------- | ------------------ |
| centered  | bool               | false    | null               |
| className | string             | false    | null               |
| docked    | 'left', 'right'    | false    | null               |
| type      | oneOf(BADGE_TYPES) | false    | BADGE_TYPES.YELLOW |
