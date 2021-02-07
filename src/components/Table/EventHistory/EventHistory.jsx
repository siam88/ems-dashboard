import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    // {
    //     title: 'Event name',
    //     dataIndex: 'Eventname',
    //     key: 'Eventname',
    // },
    {
        title: 'Title',
        dataIndex: 'Eventtitle',
        key: 'Eventtitle',
    },
    // {
    //     title: 'Event Duration',
    //     key: 'EventDuration',
    //     dataIndex: 'EventDuration',
    // },
    {
        title: 'Event Date',
        key: 'EventDate',
        dataIndex: 'EventDate',
       
        
    },
    {
        title: 'Event type',
        key: 'Eventtype',
        dataIndex: 'Eventtype',
       
        
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
        Eventname: 'Wedding',
        Eventtitle: 'White theme wedding',
        EventDuration: '6.00pm-12.00pm',
        EventDate: '29 october 2020',
        Eventtype:'Wedding',
        // Description: 'dummy dummy dummy dummy 1',
     
    },
    {
        key: '2',
        Eventname: 'Birthday',
        Eventtitle: 'Jungle Theme',
        EventDuration: '3.00pm-6.00pm',
        EventDate: '29 november 2020',
        Eventtype:'Birthday',
        // Description: 'dummy dummy dummy dummy 1',
       
    },
];
const EventHistory = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default EventHistory