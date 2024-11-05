import AdminLayout from "@/layout/Admin/IndexLayout";
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from "next/router";

const AdminCreate = () => {
    const router = useRouter();
    const onFinish = async (values: any) => {
        if (!values.password) {
            values.password = '123456';
        }
        const response = await fetch('/api/createUser', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Conent-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            const param = await response.text();
            alert(JSON.parse(param).msg)
        }

        if (response.status === 200) {
            const responseData = await response.json();
            alert(`创建成功！\n手机号: ${responseData.phone}; 密码: ${responseData.password}`)
            router.push('/admin/checkUser')
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        phone?: string;
        password?: string;
    };
    return <AdminLayout actvie="1">
        <div>

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
                <Form.Item<FieldType>
                    label="手机号"
                    name="phone"
                    rules={[{ required: true, message: '请填写手机号!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="密码"
                    name="password"
                >
                    <Input.Password placeholder="默认123456" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        创建
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </AdminLayout>
}

export default AdminCreate;