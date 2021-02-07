import React, { useState } from "react";
import { Table, Tag, Space, Typography, Input } from "antd";
import SliderTable from "../../components/Table/SliderTable/SliderTable";
import AboutusTable from "../../components/Table/AboutusTable/AboutusTable";
import ProfessionalTeam from "../../components/Table/ProfessionalTeam/ProfessionalTeam";
import ClientReviewTable from "../../components/Table/ClientReviewTable/ClientReviewTable";

import CustomModal from "../../components/modal/modal";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";

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
      <Title>Home Slider</Title>

      <Button type="primary" onClick={showModal}>
        Add Slider
      </Button>
      <Modal
        title="Slider Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Image Title"
          prefix={<UserOutlined />}
        />
        <br />        <Input
          size="large"
          placeholder="Image Source"
          prefix={<UserOutlined />}
        />        <Input
        size="large"
        placeholder="Image Source"
        prefix={<UserOutlined />}
      />
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
      <SliderTable />

      <Title>About us table </Title>

      <Button type="primary" onClick={showModal}>
        Add About us info
      </Button>
      <Modal
        title="About us Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
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
      <AboutusTable />

      <Title>OUR PROFESSIONAL TEAM table </Title>

      <Button type="primary" onClick={showModal}>
        Add Person to the  PROFESSIONAL TEAM
      </Button>
      <Modal
        title="About us Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Person Name"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Person Position"
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
      <ProfessionalTeam />

      <Title>OUR Client Review table </Title>


<Modal
  title="About us Information adding field"
  visible={isModalVisible}
  onOk={handleOk}
  onCancel={handleCancel}
>
  <Input
    size="large"
    placeholder="Person Name"
    prefix={<UserOutlined />}
  />
  <br />
  <br />
 
  <Input
    size="large"
    placeholder="comment"
    prefix={<UserOutlined />}
  />
</Modal>
<ClientReviewTable />
    </div>
  );
};

export default Content;
