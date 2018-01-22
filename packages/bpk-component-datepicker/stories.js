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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  weekDays,
  formatMonth,
  formatDateFull,
} from 'bpk-component-calendar/test-utils';
import {
  format,
  dateToBoundaries,
  addMonths,
  addDays,
  startOfDay,
} from 'bpk-component-calendar/src/date-utils';
import BpkDatepicker, { type BpkDatePickerProps } from './index';

const formatDate = date => format(date, 'DD/MM/YYYY');

const inputProps = {
  onChange: () => null,
  placeholder: 'placeholder',
  large: true,
  docked: true,
};

const inputPropsWithEventHandlers = {
  onClick: action('input onClick'),
  onFocus: action('input onFocus'),
  onBlur: action('input onBlur'),
  onTouchEnd: action('input onTouchEnd'),
  onKeyDown: action('input onKeyDown'),
  onKeyUp: action('input onKeyUp'),
  onChange: () => null,
  placeholder: 'placeholder',
  large: true,
};

type CalendarContainerProps = {
  ...$Exact<BpkDatePickerProps>,
  date: ?Date,
};

type CalendarContainerState = {
  date: ?Date,
};

/* eslint-disable react/no-multi-comp */
class CalendarContainer extends Component<
  CalendarContainerProps,
  CalendarContainerState,
> {
  static propTypes = {
    ...BpkDatepicker.propTypes,
    date: PropTypes.instanceOf(Date),
  };

  static defaultProps = {
    ...BpkDatepicker.defaultProps,
    date: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      date: props.date,
    };
  }
  render() {
    return (
      <div id="datepicker-element">
        <div id="application-element">
          <BpkDatepicker
            {...this.props}
            date={this.state.date}
            onDateSelect={date => {
              this.setState({ date });
              action('Selected date')(date);
            }}
            onMonthChange={action('Changed month')}
            getApplicationElement={() =>
              document.getElementById('application-element')
            }
            renderTarget={() => document.getElementById('datepicker-element')}
          />
        </div>
      </div>
    );
  }
}

type ReturnDatePickerState = {
  departDate: Date,
  returnDate: Date,
};

class ReturnDatepicker extends Component<{}, ReturnDatePickerState> {
  constructor() {
    super();

    this.state = {
      departDate: startOfDay(addDays(new Date(), 1)),
      returnDate: startOfDay(addDays(new Date(), 4)),
    };
  }

  minDate = startOfDay(new Date());
  maxDate = startOfDay(addMonths(new Date(), 12));

  render() {
    return (
      <div id="datepicker-element">
        <div style={{ display: 'flex' }} id="application-element">
          <BpkDatepicker
            id="depart"
            closeButtonText="Close"
            daysOfWeek={weekDays}
            changeMonthLabel="Change month"
            title="Departure date"
            getApplicationElement={() =>
              document.getElementById('application-element')
            }
            renderTarget={() => document.getElementById('datepicker-element')}
            formatDate={formatDate}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            inputProps={inputProps}
            date={this.state.departDate}
            onDateSelect={departDate => {
              this.setState({
                departDate,
                returnDate: dateToBoundaries(
                  this.state.returnDate,
                  departDate,
                  this.maxDate,
                ),
              });
              action('Selected departure date')(departDate);
            }}
            onMonthChange={action('Changed month')}
          />
          <BpkDatepicker
            id="return"
            closeButtonText="Close"
            daysOfWeek={weekDays}
            changeMonthLabel="Change month"
            title="Return date"
            getApplicationElement={() =>
              document.getElementById('application-element')
            }
            renderTarget={() => document.getElementById('datepicker-element')}
            formatDate={formatDate}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            inputProps={inputProps}
            date={this.state.returnDate}
            onDateSelect={returnDate => {
              this.setState({
                returnDate,
                departDate: dateToBoundaries(
                  this.state.departDate,
                  this.minDate,
                  returnDate,
                ),
              });
              action('Selected return date')(returnDate);
            }}
            onMonthChange={action('Changed month')}
          />
        </div>
      </div>
    );
  }
}
/* eslint-enable react/no-multi-comp */

storiesOf('bpk-component-datepicker', module)
  .add('Default', () => (
    <div id="application-element">
      <CalendarContainer
        id="myDatepicker"
        closeButtonText="Close"
        daysOfWeek={weekDays}
        changeMonthLabel="Change month"
        title="Departure date"
        formatDate={formatDate}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        date={new Date()}
      />
    </div>
  ))
  .add('Min date in the past', () => (
    <div id="application-element">
      <CalendarContainer
        id="myDatepicker"
        closeButtonText="Close"
        daysOfWeek={weekDays}
        changeMonthLabel="Change month"
        title="Departure date"
        formatDate={formatDate}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        minDate={new Date(2011, 1, 2)}
        initiallyFocusedDate={new Date()}
      />
    </div>
  ))
  .add('Without date set', () => (
    <div id="application-element">
      <CalendarContainer
        id="myDatepicker"
        closeButtonText="Close"
        daysOfWeek={weekDays}
        changeMonthLabel="Change month"
        title="Departure date"
        formatDate={formatDate}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
      />
    </div>
  ))
  .add('Passing through props to underlying input', () => (
    <div id="application-element">
      <CalendarContainer
        id="myDatepicker"
        closeButtonText="Close"
        daysOfWeek={weekDays}
        changeMonthLabel="Change month"
        title="Departure date"
        formatDate={formatDate}
        formatMonth={formatMonth}
        formatDateFull={formatDateFull}
        inputProps={inputPropsWithEventHandlers}
      />
    </div>
  ))
  .add('Depart & Return', () => <ReturnDatepicker />);
