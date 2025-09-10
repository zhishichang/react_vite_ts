import React, { useState } from "react";
import { App, Button, Form, Input } from "antd";
import styles from "./index.module.css";
import type { Login as LoginType } from "@/types";
import { userLogin } from "@/service/user";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();
  const onFinish = async (values: LoginType.params) => {
    // 业务数据（API返回的数据 并且不包括code msg）
    setLoading(true);
    try {
      const result = await userLogin(values);
      console.log(result);
      if (result.code != 200) {
        message.error(result.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
            <Button type="primary" block htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
