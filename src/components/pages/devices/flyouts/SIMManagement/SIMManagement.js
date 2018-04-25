// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import { Select } from 'components/shared';


import {
  Flyout,
  FlyoutHeader,
  FlyoutTitle,
  FlyoutCloseBtn,
  FlyoutContent,
} from 'components/shared';

import './SIMManagement.css';

const simManagementUrl = 'https://iot.telefonica.com/contact';

const optionValues = [
  { value: 'telefonica'}
];

const initialState = {
  provider: 'telefonica'
};

export class SIMManagement extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChange = (propOnChange) => ({ target: { value: { value } = {} } = {} }) => {
    this.setState( { provider: value } );
  }

  render() {

    const { t, onClose } = this.props;
    const { provider } = this.state;

    const options = optionValues.map(({ value }) => ({
      label: t(`devices.flyouts.SIMManagement.operator.${value}`),
      value
    }));

    return (
      <Flyout>
        <FlyoutHeader>
          <FlyoutTitle>{t('devices.flyouts.SIMManagement.title')}</FlyoutTitle>
          <FlyoutCloseBtn onClick={onClose} />
        </FlyoutHeader>
        <FlyoutContent>
          <div className="sim-management-container">
            <div className="sim-management-selector">
              <div className="sim-management-label-selector">{t(`devices.flyouts.SIMManagement.provider`)}</div>
              <Select
                  className="sim-management-dropdown"
                  options={options}
                  value={provider}
                  searchable={false}
                  clearable={false}
                onChange={this.onChange(this.props.onChange)} />
            </div>
            <div className="sim-management-label">{t(`devices.flyouts.SIMManagement.header.${provider}`)}</div>
            <div className="sim-management-label">
              <Trans i18nKey={`devices.flyouts.SIMManagement.description.${provider}`}>
                Feature is... <Link to={simManagementUrl} target="_blank">{simManagementUrl}</Link> ...your account.
              </Trans>
            </div>
          </div>
        </FlyoutContent>
      </Flyout>
    );
  }
}
