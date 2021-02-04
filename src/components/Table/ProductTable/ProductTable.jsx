import React, { useState ,useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ProductTable.css";
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Button, Space ,Image} from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import Imges from '../../../assets/images/ram.jpg'

const originData = [];


for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    Name: `Samsung 870 QVO 1TB 2.5? SATA III SSD ${i}`,
    SKU: `${i}`,
    Stock: 'in stock',
    Price:8250,
    Categories:'Router',
    Tags:'dnkjsdn',
    Date:'Published 2021/01/18 at 3:33 pm'
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ProductTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [searchText,setSearchText]=useState("");
  const [searchedColumn,setSearchedColumn]=useState("");
  const searchInput = useRef(null);
 const  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex)
   
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('')
  };

  const getColumnSearchProps = dataIndex => ({

    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchedColumn(dataIndex)

              setSearchText(selectedKeys[0])
            //   this.setState({
            //     searchText: selectedKeys[0],
            //     searchedColumn: dataIndex,
            //   });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
        if (visible) {    setTimeout(() => searchInput.current.select());   }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
        title: "Image",
        dataIndex: "Image", 
        render: theImageURL =>  <Image
        width={50} height={50}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      /> },
    {
      title: "Name",
      dataIndex: "Name",
      width: "30%",
      editable: true,
      ...getColumnSearchProps('Name'),
      sorter: {
        compare: (a, b) => a.Name - b.Name,
        multiple: 3,
      },
    },
    {
      title: "SKU",
      dataIndex: "SKU",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('SKU'),
      sorter: {
        compare: (a, b) => a.SKU - b.SKU,
        multiple: 3,
      },
    },
    {
      title: "Stock",
      dataIndex: "Stock",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('Stock'),
      sorter: {
        compare: (a, b) => a.Stock - b.Stock,
        multiple: 3,
      },
    },
    {
      title: "Price",
      dataIndex: "Price",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('Price'),
      sorter: {
        compare: (a, b) => a.Price - b.Price,
        multiple: 3,
      },
    },
    {
      title: "Categories",
      dataIndex: "Categories",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('Categories'),
      sorter: {
        compare: (a, b) => a.Categories - b.Categories,
        multiple: 3,
      },
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('Tags'),
      sorter: {
        compare: (a, b) => a.Tags - b.Tags,
        multiple: 3,
      },
    },
    {
      title: "Date",
      dataIndex: "Date",
      width: "10%",
      editable: true,
      ...getColumnSearchProps('Date'),
      sorter: {
        compare: (a, b) => a.Date - b.Date,
        multiple: 3,
      },
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "Price" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default ProductTable;
