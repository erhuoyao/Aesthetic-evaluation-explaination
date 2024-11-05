import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './index.module.css';
import '@/app/globals.css';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import { useLocal } from '@/hooks/local';


const EndPage = () => {
    const router = useRouter();
    const onRouter = async () => {
        localStorage.removeItem('selected-image')
        router.replace('/login');
    }

    const add = async () => {
        const userStr = localStorage.getItem('user');
        const selectedStr = localStorage.getItem('selected-image');
        if (userStr && selectedStr) {
            const user = JSON.parse(userStr);
            await fetch(`/api/data`, {
                method: 'POST',
                body: JSON.stringify({
                    phone: user.phone,
                    createTime: moment().format('YYYY年MM月DD日 HH:mm:ss'),
                    data: selectedStr
                })
            })
            localStorage.removeItem('selected-image')
            localStorage.removeItem('user')
        }
    }

    useEffect(() => {
        localStorage.removeItem('acc-images');
        add()
    }, []);
    return <>
        <Head>
            <title>结束</title>
            <meta name="description" content="美学评分" />
        </Head>
        <div className={styles.page}>

            <main className={styles.selectPage}>
                <header className={styles.header}>
                    <h1>实验结束</h1>
                </header>
                <p>感谢您的参与！</p>

                <div className={styles.btn}>
                    <Button style={{ marginTop: 50 }}
                        onClick={() => onRouter()}>结束</Button>
                </div>
            </main>
        </div>
    </>
}

export default EndPage;