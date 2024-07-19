/**
 *creation time:2024/7/18
 *author: anmengweilai
 */

import {
  BorderOutlined,
  CloseOutlined,
  MenuOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { window as appWindeow } from '@tauri-apps/api';
import { App, Button } from 'antd';
import React from 'react';

interface WindowHeaderProps {
  [key: string]: any;
}

const WindowHeader: React.FC<WindowHeaderProps> = (props) => {
  const {} = props;

  const { modal } = App.useApp();

  return (
    <div
      className={
        'w-screen flex justify-end py-2 pos-absolute left-0 right-0 h-45px'
      }
    >
      <div className={'flex'}>
        <Button type={'text'} onClick={async () => {}}>
          <MenuOutlined />
        </Button>
        <Button
          type={'text'}
          onClick={async () => {
            await appWindeow.appWindow.minimize();
          }}
        >
          <MinusOutlined />
        </Button>
        <Button
          type={'text'}
          onClick={async () => {
            await appWindeow.appWindow.maximize();
          }}
        >
          <BorderOutlined />
        </Button>
        <Button
          type={'text'}
          onClick={async () => {
            modal.confirm({
              title: '关闭应用',
              content: '是否关闭应用,所有运行脚本都将关闭',
              onOk: async () => {
                // 需要优先关闭其他执行脚本
                await appWindeow.appWindow.close();
              },
            });
          }}
        >
          <CloseOutlined />
        </Button>
      </div>
    </div>
  );
};

export default WindowHeader;
