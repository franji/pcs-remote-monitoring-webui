// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { SIMManagement } from './SIMManagement';

export const SIMManagementContainer = translate()(connect(null, null)(SIMManagement));
