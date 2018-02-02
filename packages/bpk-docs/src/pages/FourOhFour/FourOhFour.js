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
import Helmet from 'react-helmet';
import { PropTypes as RouterPropTypes } from 'react-router';

import BpkButton from 'bpk-component-button';
import { colorWhite } from 'bpk-tokens/tokens/base.es6';
import { withLargeButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import LongArrowRightIcon from 'bpk-component-icon/lg/long-arrow-right';
import {
  BpkGridContainer,
  BpkGridRow,
  BpkGridColumn,
} from 'bpk-component-grid';
import { cssModules } from 'bpk-react-utils';

import Heading from './../../components/Heading';
import Paragraph from './../../components/Paragraph';

import STYLES from './four-oh-four.scss';
import * as ROUTES from './../../constants/routes';

const getClassName = cssModules(STYLES);
const AlignedLongArrowRightAltIcon = withRtlSupport(
  withLargeButtonAlignment(LongArrowRightIcon),
);

class FourOhFour extends React.Component {
  constructor(props) {
    super(props);

    this.onHomePageClick = this.onHomePageClick.bind(this);
  }

  onHomePageClick(e) {
    e.preventDefault();
    this.props.router.push(e.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <section className={getClassName('bpkdocs-four-oh-four__container')}>
        <Helmet title="Page Not Found" />
        <Heading level="h2">Oops.</Heading>
        We&apos;ve lost the page you&apos;re looking for. Let me take you back
        to the home page.
        <br />
        <BpkButton large href={ROUTES.HOME} onClick={this.onHomePageClick}>
          Return to the home page{' '}
          <AlignedLongArrowRightAltIcon fill={colorWhite} />
        </BpkButton>
      </section>
    );
  }
}

FourOhFour.propTypes = {
  router: PropTypes.shape(RouterPropTypes.routerShape).isRequired,
};

export default FourOhFour;
