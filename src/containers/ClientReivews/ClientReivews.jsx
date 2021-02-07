import React, { useState } from "react";
import { Table, Tag, Space, Typography, Input } from "antd";
import SliderTable from "../../components/Table/SliderTable/SliderTable";
import AboutusTable from "../../components/Table/AboutusTable/AboutusTable";
import ProfessionalTeam from "../../components/Table/ProfessionalTeam/ProfessionalTeam";
import ClientReviewTable from "../../components/Table/ClientReviewTable/ClientReviewTable";

import CustomModal from "../../components/modal/modal";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import WhyChooseus from "../../components/Table/WhyChooseus/WhyChooseus";

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
      <Title>Client Review</Title>

      <Button type="primary" onClick={showModal}>
        Add 
      </Button>
      <Modal
        title="Client Review adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Image Title"
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
      
    <ClientReviewTable/>



    </div>
  );
};

export default Content;
