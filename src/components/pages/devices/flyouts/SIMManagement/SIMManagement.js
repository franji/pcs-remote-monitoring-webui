// Copyright (c) Microsoft. All rights reserved.

import React from 'react';
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

const simManagementUrl = 'https://iot.telefonica.com/contact';

export const SIMManagement = ({ t, onClose }) => (
  <Flyout>
    <FlyoutHeader>
      <FlyoutTitle>{t('devices.flyouts.SIMManagement.title')}</FlyoutTitle>
      <FlyoutCloseBtn onClick={onClose} />
    </FlyoutHeader>
    <FlyoutContent>
      <div className="sim-management-container">
        <div className="sim-management-label">{t('devices.flyouts.SIMManagement.header')}</div>
        <div className="sim-management-label">
          <Trans i18nKey="devices.flyouts.SIMManagement.description">
            Feature is... <Link to={simManagementUrl} target="_blank">{simManagementUrl}</Link> ...your account.
          </Trans>
        </div>
      </div>
    </FlyoutContent>
  </Flyout>
);
