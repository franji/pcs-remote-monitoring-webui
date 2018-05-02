// Copyright (c) Microsoft. All rights reserved.

import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom'

import { LinkedComponent } from 'utilities';
import {
  FormControl,
  Flyout,
  FlyoutHeader,
  FlyoutTitle,
  FlyoutCloseBtn,
  FlyoutContent,
} from 'components/shared';

import './SIMManagement.css';

const simManagementUrl = 'https://iot.telefonica.com/contact';

const optionValues = [
  { value: 'telefonica' }
];

export class SIMManagement extends LinkedComponent {

  constructor(props) {
    super(props);

    this.state = {
      provider: ''
    };

    this.providerLink = this.linkTo('provider')
      .map(({ value }) => value);
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
              <div className="sim-management-dropdown">
                <FormControl
                  type="select"
                  className="sim-management-dropdown"
                  options={options}
                  searchable={false}
                  clearable={false}
                  placeholder={t('devices.flyouts.SIMManagement.select')}
                  link={this.providerLink} />
                </div>
            </div>
            { !!provider &&
              <div>
                <div className="sim-management-label-title">{t(`devices.flyouts.SIMManagement.summaryHeader`)}</div>
                <div className="sim-management-label">{t(`devices.flyouts.SIMManagement.header.${provider}`)}</div>
                <div className="sim-management-label-desctiption">
                  <Trans i18nKey={`devices.flyouts.SIMManagement.description.${provider}`}>
                    Feature is... <Link to={simManagementUrl} target="_blank">{t(`devices.flyouts.SIMManagement.here`)}</Link> ...your account.
                  </Trans>
                </div>
              </div>
            }
          </div>
        </FlyoutContent>
      </Flyout>
    );
  }
}
