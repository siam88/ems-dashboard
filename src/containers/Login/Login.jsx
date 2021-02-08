import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"



const NormalLoginForm = () => {
  const onFinish = (values) => {
    localStorage.setItem('login', values);
    console.log('Received values of form: ', values);
  };

  React.useEffect(()=>{
    localStorage.setItem('login', true);
  })
  return (
      <div  style={{margin:"10% 40% ",marginBottom:"50%"}}>
          <h1>Login</h1>
    <Form
    
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        {/* <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
      <Link className="App-link" to="/Home"> <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        </Link>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </div>
  );
};
export default NormalLoginForm