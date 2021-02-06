import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    {
        title: 'package Name',
        dataIndex: 'packageName',
        key: 'packageName',
    },
    {
        title: 'Package Price',
        dataIndex: 'PackagePrice',
        key: 'PackagePrice',
    },
    {
        title: 'Photographar',
        dataIndex: 'Photographar',
        key: 'Photographar',
    },
    {
        title: 'Event Duration',
        dataIndex: 'EventDuration',
        key: 'EventDuration',
    },
    {
        title: 'Number of Pictures',
        dataIndex: 'NumberofPictures',
        key: 'NumberofPictures',
    },
    {
        title: 'Print',
        dataIndex: 'Print',
        key: 'Print',
    },
    {
        title: 'Description',
        dataIndex: 'Description',
        key: 'Description',
    },
    {
        title: 'Image',
        key: 'Image',
        dataIndex: 'Image',
       
        
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
        packageName: 'John Brown',
        PackagePrice: 'John Brown',
        Photographar:'sikja',
        EventDuration:'3hour',
        NumberofPictures:'120piece',
        Print:' 4R (4”x6″) Matte Prints: 100 copies',
        Description: 'dummy dummy dummy dummy 1',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '2',
         packageName: 'John Brown',
        PackagePrice: 'John Brown',
        Photographar:'sikja',
        EventDuration:'3hour',
        NumberofPictures:'120piece',
        Print:' 4R (4”x6″) Matte Prints: 100 copies',
        Description: 'dummy dummy dummy dummy 1',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        key: '3',
          packageName: 'John Brown',
        PackagePrice: 'John Brown',
        Photographar:'sikja',
        EventDuration:'3hour',
        NumberofPictures:'120piece',
        Print:' 4R (4”x6″) Matte Prints: 100 copies',
        Description: 'dummy dummy dummy dummy 1',
        Image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];
const Package = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default Package