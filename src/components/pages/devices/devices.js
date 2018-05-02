// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';
import { DevicesGrid } from './devicesGrid';
import { DeviceGroupDropdownContainer as DeviceGroupDropdown } from 'components/app/deviceGroupDropdown';
import { ManageDeviceGroupsBtnContainer as ManageDeviceGroupsBtn } from 'components/app/manageDeviceGroupsBtn';
import { AjaxError, Btn, RefreshBar, PageContent, ContextMenu } from 'components/shared';
import { DeviceDetailsContainer } from './flyouts/deviceDetails';
import { DeviceNewContainer } from './flyouts/deviceNew';
import { SIMManagementContainer } from './flyouts/SIMManagement';
import { svgs } from 'utilities';

import './devices.css';

const closedFlyoutState = {
  openFlyoutName: undefined,
  selectedDeviceId: undefined
};

export class Devices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...closedFlyoutState,
      contextBtns: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPending && nextProps.isPending !== this.props.isPending) {
      // If the grid data refreshes, hide the flyout and deselect soft selections
      this.setState(closedFlyoutState);
    }
  }

  changeDeviceGroup = () => {
    const { changeDeviceGroup, deviceGroups } = this.props;
    changeDeviceGroup(deviceGroups[1].id);
  }

  closeFlyout = () => this.setState(closedFlyoutState);

  openSIMManagement = () => this.setState({ openFlyoutName: 'sim-management' });
  openNewDeviceFlyout = () => this.setState({ openFlyoutName: 'new-device' });

  onSoftSelectChange = ({ id }) => this.setState({
    openFlyoutName: 'details',
    selectedDeviceId: id
  });

  onContextMenuChange = contextBtns => this.setState({
    contextBtns,
    openFlyoutName: undefined
  });

  getSoftSelectId = ({ id }) => id;

  render() {
    const { t, devices, deviceGroupError, deviceError, isPending, lastUpdated, entities, fetchDevices } = this.props;
    const gridProps = {
      rowData: isPending ? undefined : devices || [],
      onSoftSelectChange: this.onSoftSelectChange,
      onContextMenuChange: this.onContextMenuChange,
      softSelectId: this.state.selectedDeviceId,
      getSoftSelectId: this.getSoftSelectId,
      t: this.props.t
    };
    const detailsFlyoutOpen = this.state.openFlyoutName === 'details';
    const simManagementFlyoutOpen = this.state.openFlyoutName === 'sim-management';
    const newDeviceFlyoutOpen = this.state.openFlyoutName === 'new-device';

    const error = deviceGroupError || deviceError;

    return [
      <ContextMenu key="context-menu">
        <DeviceGroupDropdown />
        { this.state.contextBtns }
        <Btn svg={svgs.simmanagement} onClick={this.openSIMManagement}>{t('devices.flyouts.SIMManagement.title')}</Btn>
        <Btn svg={svgs.plus} onClick={this.openNewDeviceFlyout}>{t('devices.flyouts.new.contextMenuName')}</Btn>
        <ManageDeviceGroupsBtn />
      </ContextMenu>,
      <PageContent className="devices-container" key="page-content">
        <RefreshBar refresh={fetchDevices} time={lastUpdated} isPending={isPending} t={t} />
        { !!error && <AjaxError t={t} error={error} /> }
        { !error && <DevicesGrid {...gridProps} /> }
        { detailsFlyoutOpen && <DeviceDetailsContainer onClose={this.closeFlyout} device={entities[this.state.selectedDeviceId]} /> }
        { simManagementFlyoutOpen && <SIMManagementContainer onClose={this.closeFlyout} /> }
        { newDeviceFlyoutOpen && <DeviceNewContainer onClose={this.closeFlyout} /> }
      </PageContent>
    ];
  }
}
