import Head from 'next/head';
import { type NextPage } from "next";
import { Input, Button, message } from 'antd';
import { TypeAnimation } from 'react-type-animation';
import styles from './login.module.css';
import '@/app/globals.css';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layout/Default/IndexLayout';

const Home: NextPage = () => {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const login = useCallback(async () => {
        const response = await fetch('/api/getUser', {
            method: 'POST',
            body: JSON.stringify({
                password,
                phone
            })
        });

        if (response.status === 200) {
            messageApi.success('登录成功');
            localStorage.setItem('user', JSON.stringify({
                phone: phone,
            }))

            setTimeout(() => {
                router.replace('/entrance');
            }, 3000)

        } else {
            messageApi.error('当前账户不存在，或者密码错误，请联系管理员');
        }
    }, [phone, password]);
    return <>
        <DefaultLayout title='AIGC Login' headerChildren={
            <>
                <h2 className={styles.title}>项目介绍</h2>
                <p className={styles.desc}>欢迎您参加我们的实验，接下来您将会和AI助手共同组成团队，对于图片的美学进行评分，我们欢迎您能够多多提出您在和AI助手相互合作中的感受和建议。</p>
            </>
        }
            footerChildren="我们保证，我们将会严格保密您的个人信息，您的行为数据只会被用作科学研究的目的，我们尊重您的意愿，您可以选择在实验中途退出，您的所有数据将会被一并消除，如确定中途退出，请提前告知工作人员，后退出界面。非常感谢您的热心参与。"
        >
            <div className={styles.aiLogo}>
                {contextHolder}
                <img src="/ai-logo.jpeg" alt="" />
                <p>
                    <TypeAnimation
                        sequence={['你好，我是你的AI助手”小美”，我的诞生经过了3万多张摄影图片的深度学习，我能够基于之前的学习，快速的给出摄影图片的美学分数，很高兴可以和你一起合作。', 0]}
                        style={{ fontSize: '20px' }}
                        repeat={Infinity}
                    /></p>
            </div>
            <div className={styles.loginUser}>
                <h2>用户登录</h2>
                <Input style={{ marginBottom: 20 }} placeholder='请输入您的手机号' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                <Input.Password placeholder='请输入您的密码' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className={styles.btn}>
                <Button type="primary" onClick={() => login()}>开始</Button>
            </div>

        </DefaultLayout>
    </>
}

export default Home;