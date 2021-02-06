import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    
    {
        title: 'Description',
        key: 'Description',
        dataIndex: 'Description',
       
        
    },
    {
        title: 'Action',
        key: 'action',
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
        key: '1',
        name: 'John Brown',
        Description: 'dummy dummy dummy dummy 1',
     
    },
    {
        key: '2',
        name: 'Jim Green',
        Description: 'dummy dummy dummy dummy 2',
       
    },
    {
        key: '3',
        name: 'Joe Black',
        Description: 'dummy dummy dummy dummy 3',
      
    },
];
const ClientReviewTable = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default ClientReviewTable