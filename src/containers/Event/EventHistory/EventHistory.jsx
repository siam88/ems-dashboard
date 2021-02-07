import React, { useState } from "react";
import { Table, Tag, Space, Typography, Input } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import EventHistorys from "../../../components/Table/EventHistory/EventHistory";

const { Title } = Typography;
const EventHistory = () => {
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
      <Title>History</Title>
{/* 
      <Button type="primary" onClick={showModal}>
        Add 
      </Button> */}
      <Modal
        title="Slider Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Event name"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Event title"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Event Duration"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Event Date"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Image Description"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Image Source"
          prefix={<UserOutlined />}
        />
      </Modal>
      <EventHistorys/>




    </div>
  );
};

export default EventHistory;
