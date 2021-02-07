import React, { useState } from "react";
import { Table, Tag, Space, Typography, Input } from "antd";
import SliderTable from "../../components/Table/SliderTable/SliderTable";
import AboutusTable from "../../components/Table/AboutusTable/AboutusTable";
import ProfessionalTeam from "../../components/Table/ProfessionalTeam/ProfessionalTeam";
import PackageTable from "../../components/Table/PackageTable/PackageTable";

import CustomModal from "../../components/modal/modal";
import { UserOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
import WhyChooseus from "../../components/Table/WhyChooseus/WhyChooseus";

const { Title } = Typography;
const Package = () => {
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
      <Title>Our Package</Title>

      <Button type="primary" onClick={showModal}>
        Add Package 
      </Button>
      <Modal
        // title="Slider Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Package Name"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Package Price"
          prefix={<UserOutlined />}
        />
        <br />
        <br />  
        <Input
          size="large"
          placeholder="Stage"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Photographer"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Videographer"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        <Input
          size="large"
          placeholder="Description"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        {/* <Input
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
        /> */}
      </Modal>
      <PackageTable/>




    </div>
  );
};

export default Package;
