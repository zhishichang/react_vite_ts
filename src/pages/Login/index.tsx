import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./index.module.css";

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form
          name="basic"
          initialValues={{ userName: "admin", userPwd: "password" }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="userPwd"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
