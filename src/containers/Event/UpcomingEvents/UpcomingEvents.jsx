import React, { useState } from "react";
import { Table, Tag, Space, Typography, Input } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import UpcomingEventTable from "../../../components/Table/UpcomingEventTable/UpcomingEventTable";

const { Title } = Typography;
const UpcomingEvent = () => {
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
      <Title>Manage Events</Title>

      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal
        // title="Slider Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Name"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Type"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Date"
          prefix={<UserOutlined />}
        />
        {/* <Input
          size="large"
          placeholder="Event Duration"
          prefix={<UserOutlined />}
        />
        <br />
        <br /> */}
       
        {/* <Input
          size="large"
          placeholder="Image Description"
          prefix={<UserOutlined />}
        />
        <br />
        <br /> */}
        {/* <Input
          size="large"
          placeholder="Image Source"
          prefix={<UserOutlined />}
        /> */}
      </Modal>
      <UpcomingEventTable/>




    </div>
  );
};

export default UpcomingEvent;
