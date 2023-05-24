import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { AppleOutlined } from "@ant-design/icons";

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const Login = () => (
    
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <div className='kapsama'>
        <Button style={{width:'100%', margin:'10px', marginLeft:'33%'}}> <AppleOutlined style={{fontSize:'20px'}}/>Apple ile Giriş Yap</Button>        
        <Button style={{width:'100%', background:'#4567b2', margin:'10px', color:'white', marginLeft:'33%'}}>Facebook ile Giriş Yap</Button>
       
      <Form.Item style={{}}
        label="Kullanıcı Adı"
        name="username"
        rules={[
          {
            required: true,
            message: 'Lütfen kullanıcı adınızı giriniz!',
          },
        ]}
      >
        <Input style={{width:'150%'}} />
      </Form.Item>
  
      <Form.Item style={{}}
        label="Şifre"
        name="password"
        rules={[
          {
            required: true,
            message: 'Lütfen şifrenizi giriniz!',
          },
        ]}
      >
        <Input.Password style={{width:'150%'}} />
      </Form.Item>
  
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Beni Hatırla</Checkbox>
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" style={{width:'150%'}}>
          Giriş Yap
        </Button>
      </Form.Item>
      </div>

    </Form>
    
  );

export default Login; 
