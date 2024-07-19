/**
 *creation time:2024/7/19
 *author: anmengweilai
 */

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, MenuProps } from 'antd';
import React from 'react';

interface WindowMenuProps {
  [key: string]: any;
}

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
  },
];

const width = 65;

const WindowMenu: React.FC<WindowMenuProps> = (props) => {
  const {} = props;

  return (
    <div style={{ width }} className={'z-100'}>
      <div style={{ width }} className={'flex justify-center items-center p-3'}>
        <Avatar />
      </div>
      <Menu
        style={{ width }}
        className={'h-full'}
        items={items}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed
      />
    </div>
  );
};

export default WindowMenu;
