

import { IProduct } from "../../type/Product"
import { Navigate, useNavigate } from "react-router-dom"

import { Button, Form, Input } from 'antd';
type IProps = {
    products: IProduct[]
    onadd: (product: IProduct) => void
}

const Addproduct = (props: IProps) => {
    const Navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onadd(values);
        // Navigate("/admin/product");

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name Product"
                name="name"
                rules={[{ required: true, message: 'Please input your Name Product!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Price Product"
                name="price"
                rules={[{ required: true, message: 'Please input your price!' }]}
            >
                <Input />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Thêm mới
                </Button>
            </Form.Item>
        </Form>
    );

}

export default Addproduct