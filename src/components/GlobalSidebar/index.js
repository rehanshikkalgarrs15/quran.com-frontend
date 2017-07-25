import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'quran-components/lib/Icon';
import Menu, { MenuItem } from 'quran-components/lib/Menu';
import LocaleFormattedMessage from 'components/LocaleFormattedMessage';

const GlobalSidebar = ({ children }) => (
  <Menu>
    {children}
    <MenuItem
      icon={<Icon type="help" />}
      href="https://quran.zendesk.com/hc/en-us"
      data-metrics-event-name="Sidebar:Link:Help"
    >
      <LocaleFormattedMessage id="nav.help" defaultMessage="Help & feedback" />
    </MenuItem>
    <MenuItem icon={<Icon type="cell" />} href="/apps">
      <LocaleFormattedMessage id="nav.mobile" defaultMessage="Mobile" />
    </MenuItem>
    <MenuItem icon={<Icon type="dollarsign" />} href="/donations">
      <LocaleFormattedMessage id="nav.contribute" defaultMessage="Contribute" />
    </MenuItem>
    <MenuItem
      href="https://quran.zendesk.com/hc/en-us/articles/210090626-Development-help"
      target="_blank"
      rel="noopener noreferrer"
      data-metrics-event-name="IndexHeader:Link:Developer"
      icon={<Icon type="laptop" />}
    >
      <LocaleFormattedMessage id="nav.developers" defaultMessage="Developers" />
    </MenuItem>
    <MenuItem
      href="http://legacy.quran.com"
      data-metrics-event-name="Sidebar:Link:Legacy"
      icon={<Icon type="alert" />}
    >
      <LocaleFormattedMessage
        id="nav.legacySite"
        defaultMessage="Legacy Quran.com"
      />
    </MenuItem>
    <MenuItem
      divider
      href="https://quranicaudio.com/"
      target="_blank"
      rel="noopener noreferrer"
      data-metrics-event-name="Sites:Audio"
    >
      Audio
    </MenuItem>
    <MenuItem
      href="http://salah.com/"
      target="_blank"
      rel="noopener noreferrer"
      data-metrics-event-name="Sites:Salah"
    >
      Salah
    </MenuItem>
    <MenuItem
      href="http://sunnah.com/"
      target="_blank"
      rel="noopener noreferrer"
      data-metrics-event-name="Sites:Sunnah"
    >

      Sunnah
    </MenuItem>
  </Menu>
);

GlobalSidebar.propTypes = {
  settingsModalProps: PropTypes.object, // eslint-disable-line
  children: PropTypes.node
};

export default GlobalSidebar;
