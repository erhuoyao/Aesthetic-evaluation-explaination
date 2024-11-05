import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../index.module.css';
import '@/app/globals.css';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useLocal } from '@/hooks/local';
import DefaultLayout from '@/layout/Default/IndexLayout';


const SelectPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [value, setValue] = useState(id);
    const onChange = (value: string) => {
        setValue(value);
    }

    const onRouter = useCallback(() => {
        router.replace(`/decisionMaking/${value}`)
    }, [value])

    useEffect(() => {
        setValue(id);
        if (id) {
            const data = useLocal.get(id as string);
            const value = data.data;
            if ((value['1'] && value['1'].length >= 3) && (value['2'] && value['2'].length >= 3) && value['3'] && value['3'].length >= 3) {
                router.replace('/end');
            }
        }
    }, [id]);
    return <>
        <DefaultLayout title='选择类别'
            headerChildren={
                <div className={styles.header}>
                    <h1>任务类型选择</h1>
                    <p>请按照工作人员的提示选择任务类型</p>
                </div>
            }
            footerChildren="我们保证，我们将会严格保密您的个人信息，您的行为数据只会被用作科学研究的目的，我们尊重您的意愿，您可以选择在实验中途退出，您的所有数据将会被一并消除，如确定中途退出，请提前告知工作人员，后退出界面。非常感谢您的热心参与，后续您将获得xx元的报酬。"
        >
            <main  className={styles.selectPage}>
                <ul className={styles.list}>
                    <li className={`${value === '1' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('1')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                            <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                        </svg>
                        类别一</li>
                    <li className={`${value === '2' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('2')}> <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                        <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                    </svg>类别二</li>
                    <li className={`${value === '3' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('3')}> <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                        <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                    </svg>类别三</li>
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button style={{ marginTop: 50 }} type="primary" onClick={() => onRouter()}>进入</Button>
                </div>
            </main>
        </DefaultLayout>
        {/* <Head>
            <title>任务类型选择</title>
            <meta name="description" content="美学评分" />
        </Head> */}
        {/* <div className={styles.page}>
            <header className={styles.header}>
                <h1>任务类型选择</h1>
                <p>请按照工作人员的提示选择任务类型</p>
            </header>
            <main className={styles.selectPage}>
                <ul className={styles.list}>
                    <li className={`${value === '1' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('1')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                            <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                        </svg>
                        类别一</li>
                    <li className={`${value === '2' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('2')}> <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                        <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                    </svg>类别二</li>
                    <li className={`${value === '3' ? `${styles.itemSelected}` : ''}`} onClick={() => onChange('3')}> <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
                        <path d="M20.7268 0.355225L25.4526 14.8998H40.7457L28.3733 23.8888L33.0991 38.4333L20.7268 29.4443L8.35447 38.4333L13.0803 23.8888L0.707949 14.8998H16.001L20.7268 0.355225Z" fill="currentColor" />
                    </svg>类别三</li>
                </ul>

                <Button style={{ marginTop: 50 }} type="primary" onClick={() => onRouter()}>进入</Button>
            </main>
            <footer className={styles.footer}>
                我们保证，我们将会严格保密您的个人信息，您的行为数据只会被用作科学研究的目的，我们尊重您的意愿，您可以选择在实验中途退出，您的所有数据将会被一并消除，如确定中途退出，请提前告知工作人员，后退出界面。非常感谢您的热心参与，后续您将获得xx元的报酬。
            </footer>
        </div> */}
    </>
}

export default SelectPage;