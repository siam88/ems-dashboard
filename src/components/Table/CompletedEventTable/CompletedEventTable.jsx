import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    {
        title: 'Name',
        dataIndex: 'Eventname',
        key: 'Eventname',
    },
    // {
    //     title: 'Completed Event title',
    //     dataIndex: 'Eventtitle',
    //     key: 'Eventtitle',
    // },
    // {
    //     title: 'Completed Event title',
    //     dataIndex: 'Eventtitle',
    //     key: 'Eventtitle',
    // },
    // {
    //     title: 'Completed Event Duration',
    //     key: 'EventDuration',
    //     dataIndex: 'EventDuration',
       
        
    // },
    {
        title: 'Date',
        key: 'EventDate',
        dataIndex: 'EventDate',
       
        
    },
    {
        title: 'Type',
        key: 'Eventtype',
        dataIndex: 'Eventtype',
       
        
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data = [
    // {
    //     key: '1',
    //     Eventname: 'John Brown',
    //     Eventtitle: 'John Brown',
    //     EventDuration: 'John Brown',
    //     EventDate: '29 october 2021',
    //     Eventtype:'Wedding',
    //     Description: 'dummy dummy dummy dummy 1',
     
    // },
    // {
    //     key: '2',
    //     Eventname: 'John Brown',
    //     Eventtitle: 'John Brown',
    //     EventDuration: 'John Brown',
    //     EventDate: '29 october 2021',
    //     Eventtype:'Wedding',
    //     Description: 'dummy dummy dummy dummy 1',
       
    // },
    // {
    //     key: '3',
    //     Eventname: 'John Brown',
    //     Eventtitle: 'John Brown',
    //     EventDuration: 'John Brown',
    //     EventDate: '29 october 2021',
    //     Eventtype:'Wedding',
    //     Description: 'dummy dummy dummy dummy 1',
      
    // },
];
const EventHistory = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default EventHistory