import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Designaiton',
        dataIndex: 'Description',
        key: 'Description',
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
        Title: 'Sanjana Afrin ',
        Description: 'CEO',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '1',
        Title: 'Ifta Kharul Islam',
        Description: 'Managing Director',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '1',
        Title: 'Tahmidul Haque',
        Description: 'Media Manager',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
];

const WhyChooseus = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default WhyChooseus