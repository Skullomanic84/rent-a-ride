"use client";
import { Form, message, Button } from "antd";
import { antdFieldValidation } from "@/helpers/validationHelper";
import Link from "next/link";
import axios from "axios";

const Login = () => {

  const onFinish = async(values) => {
    try {
      const response = await axios.post("/api/users/login", values);
      message.success(response.data.message);
    } catch (error) {
      message.error(error.response.data.message || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="w-450 form-card p-4 shadow-md">
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="text-xl m-3 text-center">Login </h1>
          <div className="flex flex-col gap-5 p-4">
            {/* email input section */}
            <Form.Item name="email" label="E-mail" rules={antdFieldValidation}>
              <input type="email"/>
            </Form.Item>

            {/* password input */}
            <Form.Item name="password" label="Password" rules={antdFieldValidation}>
              <input type="Password" />
            </Form.Item>

            {/* submit button section */}
            
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <p>
          Don't have an account Yet?<Link href="/register" className="text-blue-400"> Register</Link>
          </p>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login