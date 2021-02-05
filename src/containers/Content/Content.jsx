import React, { useState } from 'react';
import { Table, Tag, Space, Typography, Input} from 'antd';
import SliderTable from '../../components/Table/SliderTable/SliderTable'
import CustomModal from '../../components/modal/modal';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

const { Title } = Typography;
const Content = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Title>Home Silider info Table</Title>

      <Button type="primary" onClick={showModal}>
        Add Slider
      </Button>
      <Modal title="Slider Information adding field" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input size="large" placeholder="Image Title" prefix={<UserOutlined />} />
    <br />
    <br />
        <Input size="large" placeholder="Image Description" prefix={<UserOutlined />} />
    <br />
    <br />
        <Input size="large" placeholder="Image Source" prefix={<UserOutlined />} />
 

        </Modal>
      <SliderTable />
    </div>
  )
}

export default Content