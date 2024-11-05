import AdminLayout from "@/layout/Admin/IndexLayout";
import '@/app/globals.css';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css';
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

const AdminLogin = () => {
    const router = useRouter();
    const [username, setUser] = useState('');
    const [password, setPsd] = useState('');

    const onSubmit = useCallback(async () => {
        console.log(username, password);
        const data = {
            phone: username,
            password,
        }

        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
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
            if (responseData.success) {
                localStorage.setItem('admin', JSON.stringify({phone: username}));
                router.replace('/admin/checkUser')
            }
        }
        


        // console.log(responseText);
        // if (responseText) {
        //     const responseData = await response.json();
        //     console.log(responseData)
        // }
    }, [username, password])

    return (<div className={styles.adminLogin}>
        <div className={styles.model}>
            <div className={styles.loginForm}>
                <h3>后台管理系统</h3>
                <Input value={username} onChange={(e) => setUser(e.target.value)} style={{ marginBottom: 20 }} prefix={<UserOutlined />} placeholder="请输入管理员手机号" />
                <Input.Password value={password} onChange={(e) => setPsd(e.target.value)} style={{ marginBottom: 20 }} prefix={<LockOutlined />} placeholder="请输入管理员密码" />
                <Button onClick={() => onSubmit()} type="primary" block>登陆</Button>
            </div>
        </div>
    </div>)
}

export default AdminLogin;