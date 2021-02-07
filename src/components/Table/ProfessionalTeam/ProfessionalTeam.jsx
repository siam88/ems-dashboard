import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    {
        title: 'Name',
        dataIndex: 'Title',
        key: 'Title',
    },
    
    {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
    },
    
    // {
    //     title: 'Image',
    //     key: 'Image',
    //     dataIndex: 'Image',
       
        
    // },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                {/* <a>Invite {record.name}</a> */}
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        Title: 'Sanjana Afrin',
        Description: 'CEO',
        // Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '2',
        Title: 'Ifta kharul Islam',
        Description: 'Managing Director',
        // Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '3',
        Title: 'Tahmidul Haque',
        Description: 'Media Director',
        // Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];
const ProfessionaTeam = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default ProfessionaTeam