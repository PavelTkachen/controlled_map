import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import MapIcon from '@material-ui/icons/Map';
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import RefreshIcon from "@material-ui/icons/Refresh";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from '@material-ui/icons/Info';
import TimelineIcon from '@material-ui/icons/Timeline';
import PrintIcon from '@material-ui/icons/Print';
import AlarmIcon from '@material-ui/icons/Alarm';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CodeIcon from '@material-ui/icons/Code';

const ERROR_STYLE = { color: '#ff1744' }

const ActionButton = ({ onClick, title, ...restProps }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        onClick={e => {
          e.stopPropagation();
          onClick();
        }}
        {...restProps}
      />
    </Tooltip>
  );
};

export const StartDiagAction = props => (
  <ActionButton {...props}>
    <AlarmIcon />
  </ActionButton>
);

export const MapAction = props => (
    <ActionButton {...props}>
        <MapIcon />
    </ActionButton>
);

export const ImportAction = props => (
  <ActionButton {...props}>
    <ImportExportIcon />
  </ActionButton>
);
export const PrintAction = props => (
  <ActionButton {...props}>
    <PrintIcon />
  </ActionButton>
);

export const MetaDataAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <DataUsageIcon />
  </ActionButton>
);

export const ErrorAction = props => (
  <ActionButton size="small" style={ERROR_STYLE} {...props}>
    <ErrorOutlineIcon />
  </ActionButton>
);

export const EditAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <CreateIcon />
  </ActionButton>
);

export const DeleteAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <DeleteIcon />
  </ActionButton>
);

export const InfoAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <InfoIcon />
  </ActionButton>
);

export const RefreshAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <RefreshIcon />
  </ActionButton>
);

export const SettingsAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <SettingsIcon />
  </ActionButton>
);

export const MonitoringAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <TimelineIcon />
  </ActionButton>
)

export const BackAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <ArrowBackIcon />
  </ActionButton>
);

export const CodeAction = props => (
  <ActionButton size="small" color="primary" {...props}>
    <CodeIcon />
  </ActionButton>
);

ActionButton.defaultProps = {
  onClick: () => { }
};