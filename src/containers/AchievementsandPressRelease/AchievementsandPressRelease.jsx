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
import AchievementsandPressReleaseTable from "../../components/Table/AchievementsandPressRelease/AchievementsandPressRelease";

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
      <Title>Achievements</Title>

      <Button type="primary" onClick={showModal}>
        Add 
      </Button>
      <Modal
        // title="Achievements and Press Release Information adding field"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          size="large"
          placeholder="Number"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        {/* <Input
          size="large"
          placeholder="Project Completed"
          prefix={<UserOutlined />}
        />
        <br />
        <br /> */}
        <Input
          size="large"
          placeholder="Description"
          prefix={<UserOutlined />}
        />
        <br />
        <br />
        {/* <Input
          size="large"
          placeholder="Telephonic Talk"
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
     

<AchievementsandPressReleaseTable/>


    </div>
  );
};

export default Content;
