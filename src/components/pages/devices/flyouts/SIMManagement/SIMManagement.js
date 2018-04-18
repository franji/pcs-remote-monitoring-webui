// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom'

import {
  Flyout,
  FlyoutHeader,
  FlyoutTitle,
  FlyoutCloseBtn,
  FlyoutContent,
} from 'components/shared';

import './SIMManagement.css';

export class SIMManagement extends Component {

  render() {
    const { t, onClose } = this.props;

    return (
      <Flyout>
        <FlyoutHeader>
          <FlyoutTitle>{t('devices.flyouts.SIMManagement.title')}</FlyoutTitle>
          <FlyoutCloseBtn onClick={onClose} />
        </FlyoutHeader>
        <FlyoutContent>
          <div className="sim-management-container">
            <div className="sim-management-header">{t('devices.flyouts.SIMManagement.header')}</div>
            <div className="sim-management-descr">
              <Trans i18nKey="devices.flyouts.SIMManagement.description">
                Feature is... <Link to={t('devices.flyouts.SIMManagement.url')} target="_blank">{t('devices.flyouts.SIMManagement.url')}</Link> ...your account.
              </Trans>
            </div>
          </div>
        </FlyoutContent>
      </Flyout>
    );
  }
}
