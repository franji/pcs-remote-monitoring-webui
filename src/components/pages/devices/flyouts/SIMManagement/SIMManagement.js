// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';

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
            <div className="sim-management-descr">{t('devices.flyouts.SIMManagement.description')}</div>
          </div>
        </FlyoutContent>
      </Flyout>
    );
  }
}
