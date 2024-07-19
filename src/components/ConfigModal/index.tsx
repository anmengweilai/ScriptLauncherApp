/**
 *creation time:2024/7/17
 *author: anmengweilai
 */

import React from 'react';
import { ModalForm, ModalFormProps } from '@ant-design/pro-components';


interface ConfigModalProps extends ModalFormProps{
  [key: string]: any;
}

const ConfigModal: React.FC<ConfigModalProps> = (props) => {

  const {...modalFormProps} = props;

  return (
    <ModalForm {...modalFormProps}>

    </ModalForm>
  );
};

export default ConfigModal;
