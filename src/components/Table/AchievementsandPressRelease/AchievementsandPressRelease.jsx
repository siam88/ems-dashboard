import React from "react";
import { Table, Tag, Space, Image } from "antd";

const columns = [
  {
    title: "Happy Client",
    dataIndex: "HappyClient",
    key: "HappyClient",
  },
//   {
//     title: "Project Completed",
//     dataIndex: "ProjectCompleted",
//     key: "ProjectCompleted",
//   },
//   {
//     title: "Photo Capture",
//     dataIndex: "PhotoCapture",
//     key: "PhotoCapture",
//   },
//   {
//     title: "Telephonic Talk",
//     dataIndex: "TelephonicTalk",
//     key: "TelephonicTalk",
//   },

  {
    title: "Description",
    key: "Description",
    dataIndex: "Description",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    HappyClient: "1",
    ProjectCompleted: "1",
    // PhotoCapture: "5568",
    // TelephonicTalk: "4665145",
    Description: "Wedding",
  },
  {
    key: "2",
    HappyClient: "2",
    // ProjectCompleted: "2222",
    // PhotoCapture: "5568",
    // TelephonicTalk: "4665145",
    Description: "Birthday",
  },
//   {
//     key: "3",
//     HappyClient: "4562",
//     // ProjectCompleted: "2222",
//     // PhotoCapture: "5568",
//     // TelephonicTalk: "4665145",
//     Description: "dummy dummy dummy dummy 3",
//   },
];
const AchievementsandPressRelease = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default AchievementsandPressRelease;
