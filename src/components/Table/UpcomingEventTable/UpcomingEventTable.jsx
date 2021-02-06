import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    {
        title: 'Up-Event name',
        dataIndex: 'Eventname',
        key: 'Eventname',
    },
    {
        title: 'Up-Event title',
        dataIndex: 'Eventtitle',
        key: 'Eventtitle',
    },
    {
        title: 'EveUp-Eventnt title',
        dataIndex: 'Eventtitle',
        key: 'Eventtitle',
    },
    {
        title: 'Up-Event Duration',
        key: 'EventDuration',
        dataIndex: 'EventDuration',
       
        
    },
    {
        title: 'Up-Event Date',
        key: 'EventDate',
        dataIndex: 'EventDate',
       
        
    },
    {
        title: 'Up-Event type',
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
        Eventname: 'John Brown',
        Eventtitle: 'John Brown',
        EventDuration: 'John Brown',
        EventDate: '29 october 2021',
        Eventtype:'Wedding',
        Description: 'dummy dummy dummy dummy 1',
     
    },
    {
        key: '2',
        Eventname: 'John Brown',
        Eventtitle: 'John Brown',
        EventDuration: 'John Brown',
        EventDate: '29 october 2021',
        Eventtype:'Wedding',
        Description: 'dummy dummy dummy dummy 1',
       
    },
    {
        key: '3',
        Eventname: 'John Brown',
        Eventtitle: 'John Brown',
        EventDuration: 'John Brown',
        EventDate: '29 october 2021',
        Eventtype:'Wedding',
        Description: 'dummy dummy dummy dummy 1',
      
    },
];
const UpcomingEvent = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default UpcomingEvent