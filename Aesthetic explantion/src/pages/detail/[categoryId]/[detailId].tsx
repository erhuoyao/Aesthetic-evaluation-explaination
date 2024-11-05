import Head from 'next/head';
import Image from 'next/image';
import styles from '@/pages/detail/index.module.css';
import '@/app/globals.css';
import { useRouter } from 'next/router';
import { Button, Input, InputNumber, Modal, Radio, RadioChangeEvent, Table } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { getDetailContent } from '@/hooks/detail';
import EchartsLine from '@/components/Echarts';
import { IFormat, useLocal } from '@/hooks/local';
import React from 'react';
import DefaultLayout from '@/layout/Default/IndexLayout';

const DetailImagePage = React.memo(() => {
    const router = useRouter();
    const { detailId, categoryId } = router.query;
    const [imageContent, setImageContent] = useState<any>(null);
    const [agree, setAgree] = useState(false);
    const [open, setOpen] = useState(false);
    const [xiayibu, setXiayibu] = useState(false);
    const [columns, setColumns] = useState<any[]>([]);
    /**
     * 
     */
    const [question, setQuestion] = useState<{
        parentIndex: number, // 0
        childIndex: number, // 1
    }[]>([])

    const showModal = () => {
        setOpen(true);
    };

    const [fenshu, setFenshu] = useState(1);
    const [name, setName] = useState('');
    const [youyongma, setYouyongma] = useState('');
    const onXiayibu = useCallback(() => {
        if (!fenshu || !youyongma || !name) {
            alert('请填写问卷!')
            return;
        }
        setXiayibu(true);
    }, [fenshu, youyongma, categoryId, detailId, agree, question, imageContent, name]);
    //111
    const onChange123 = useCallback((e: RadioChangeEvent, item: any) => {
        console.log(e, item);
        setYouyongma(e.target.value);
    }, [imageContent]);
    const hideModal = useCallback(() => {
        if (question.length < 4) {
            alert('请选择完所有的问卷后进行下一步');
            return false;
        }
        setOpen(false);
        setXiayibu(false);
        const res: IFormat = {
            id: categoryId as string,
            selectedValue: detailId as string,
            agree,
            questionnaire: [],
            questionnaire2: [],
            questionnaire3: {
                value: imageContent.questionnaire2.value,
                fraction: fenshu,
            },
            questionnaire4: {
                value: '姓名',
                fraction: name,
            }
        }
        const q = imageContent.questionnaire.map((item: any, index: number) => ({
            value: item.value,
            fraction: question[index] ? item.list[question[index].childIndex].value : '1'
        }));
        const b = imageContent.questionnaire2.map((item: any, index: number) => ({
            value: item.value,
            fraction: youyongma
        }));
        res.questionnaire2 = b;
        res.questionnaire = q;
        console.log([res])
        useLocal.set({
            id: categoryId as string,
            value: [res],
        })
        router.replace(`/category`)
        // router.replace(`/decisionMaking/${categoryId}`)
    }, [categoryId, detailId, agree, question, imageContent, youyongma]);

    useEffect(() => {
        localStorage.removeItem('acc-images');
        const imageContent = getDetailContent(detailId as string, categoryId as string);
        console.log(imageContent, 'imageContent');
        if (imageContent?.type === 'compared') {
            setColumns([
                {
                    title: '图片展示',
                    dataIndex: 'image',
                    key: 'image',
                    render: (text: any) => <Image src={text} alt='' />,
                },
                {
                    title: '图片编号',
                    dataIndex: 'number',
                    key: 'number',
                },
                {
                    title: '美学评分',
                    dataIndex: 'fraction',
                    key: 'fraction',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例一') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
                {
                    title: '布局',
                    dataIndex: 'composition',
                    key: 'composition',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例二') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
                {
                    title: '质量',
                    dataIndex: 'quality',
                    key: 'quality',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例三') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
                {
                    title: '色彩',
                    dataIndex: 'color',
                    key: 'color',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例四') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
                {
                    title: '景深',
                    dataIndex: 'depth',
                    key: 'depth',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例五') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
                {
                    title: '光照',
                    dataIndex: 'light',
                    key: 'light',
                    render: (text: any, record: any) => {
                        if (record.number === '当前图片') {
                            return <div style={{ color: '#1890FF' }}>{text}</div>
                        }
                        if (record.number === '案例六') {
                            return <div style={{ color: '#000' }}>{text}</div>
                        }
                        return <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{text}</div>
                    }
                },
            ]);
        }
        setFenshu(imageContent?.questionnaire3 ? imageContent?.questionnaire3.value : 1)
        const _name = imageContent?.questionnaire4?.value ?? '';
        setName(_name)
        setImageContent(imageContent);
    }, [detailId, categoryId]);



    const onsubmit = (v: 'yes' | 'no') => {
        showModal()
        switch (v) {
            case 'yes':
                setAgree(true);
                break;
            case 'no':
                setAgree(false);
                break;
            default:
                setAgree(false);
                break;
        }
    }
    const handleCancel = () => {
        setOpen(false);
        setXiayibu(false);
    };

    const onChange = useCallback((e: RadioChangeEvent, item: any) => {
        if (imageContent) {
            const parentIndex = imageContent.questionnaire.findIndex((it: any) => it.value === item.value);
            const childIndex = item.list.findIndex((it: any) => it.value === e.target.value)
            const _question = JSON.parse(JSON.stringify(question)) ?? [];
            if (_question.length) {
                const isShow = _question.findIndex((_q: any) => _q.parentIndex === parentIndex);
                if (isShow >= 0) {
                    _question[isShow].childIndex = childIndex;
                } else {
                    _question.push({
                        parentIndex,
                        childIndex
                    })
                }
            } else {
                _question.push({
                    parentIndex,
                    childIndex
                })
            }

            setQuestion(_question);
        }
    }, [imageContent, question]);

    return <>
        <DefaultLayout
            title='详情页'
            footerChildren={
                <>
                    <p className={styles.detailPageFooter}>您是否同意AI助手给出的图片审美评分</p>
                    <div className={styles.flex20}>
                        <Button type="primary" onClick={() => onsubmit('yes')}>同意</Button>
                        <Button onClick={() => onsubmit('no')}>不同意</Button>
                    </div>
                </>
            }
        >
            <div className={styles.content}>
                <div className={styles.detail}>
                    <div className={styles.left}>
                        {
                            imageContent && imageContent.image && <Image src={imageContent.image} alt='image' width={590} />
                        }
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightFlex}>
                            <div className={styles.aiContent}>
                                <div className={styles.title}>AI 助手给出的这张图的审美评分是（5分制）</div>
                                {
                                    imageContent && <div className={styles.aiFraction}>{imageContent.fraction}<span>分</span> </div>
                                }
                            </div>
                        </div>
                        {
                            imageContent && imageContent.type === 'probability' && <div style={{ fontSize: 18, color: '#000' }}>
                                {imageContent.desc}
                            </div>
                        }
                        <div>
                            {
                                imageContent && imageContent.type === 'feature' && <EchartsLine
                                    title='各个特征的分数如下图所示（5分制)'
                                    series={[{
                                        name: 'AI',
                                        type: 'bar',
                                        data: imageContent?.list.map((item: any) => item.fraction).reverse(),
                                    }]}
                                    yAxisData={imageContent?.list.map((item: any) => item.text).reverse()}
                                />
                            }
                        </div>
                    </div>
                </div>
                {
                    imageContent && imageContent.type === 'compared' && <div style={{ marginTop: 20 }}>
                        <Table columns={columns} dataSource={imageContent.exampleList} />
                    </div>
                }
                <Modal centered width={'50%'} closable keyboard={false} title='局部问卷调查' open={open}
                    onCancel={handleCancel}
                    footer={
                        <>
                            {
                                xiayibu && <Button type="primary" onClick={() => hideModal()}>确认</Button>
                            }
                            {!xiayibu && <Button type="primary" onClick={() => onXiayibu()}>下一步</Button>}
                        </>
                    }>
                    {
                        !xiayibu && <div className={styles.datiba}>
                            <div className={styles.datibaLeft}>

                                <h3>{imageContent ? imageContent.questionnaire3.desc : ''}</h3>
                                <div className={styles.inputNumber}>
                                    <InputNumber min={1} max={5} value={fenshu} onChange={(v) => setFenshu(v ? v : 1)} />
                                    <span>满分为5分</span>
                                </div>
                                {
                                    imageContent && imageContent.questionnaire2.map((item: any, index: number) => <div key={index}>
                                        <h4>{item.value}</h4>
                                        <Radio.Group onChange={(e) => onChange123(e, item)}>
                                            {
                                                item.list && item.list.map((line: any, lindex: number) => <Radio key={lindex} value={line.value}>{line.value}</Radio>)
                                            }
                                        </Radio.Group>
                                    </div>)
                                }

                                <h3 style={{marginTop: 40}}>{imageContent ? imageContent.questionnaire4.desc : ''}</h3>
                                <div className={styles.inputNumber}>
                                    <Input placeholder='请输入您的姓名' value={name}  onChange={(v) => {
                                        setName(v.target.value);
                                    }}  />
                                </div>

                            </div>
                            <div className={styles.datibaRight}>
                                {
                                    imageContent && imageContent.image && <Image src={imageContent.image} alt='image' width={590} />
                                }
                            </div>
                        </div>
                    }
                    {
                        xiayibu && <>
                            {
                                imageContent && imageContent.questionnaire.map((item: any, index: number) => <div key={index} className={styles.questionItemBox}>
                                    <div className={styles.questionItem}>
                                        <p>{item.value}</p>
                                        <Radio.Group onChange={(e) => onChange(e, item)}>
                                            {
                                                item.list && item.list.map((line: any, lindex: number) => <Radio key={lindex} value={line.value}>{line.value}</Radio>)
                                            }
                                        </Radio.Group>
                                    </div>
                                    <div className={styles.questionItemDesc}>
                                        {item.list && question.length && question[index] ? (item.list[question[index].childIndex].desc ?? '') : ''}
                                    </div>
                                </div>)
                            }
                        </>
                    }
                </Modal>
            </div>
        </DefaultLayout>
    </>
});

DetailImagePage.displayName = 'DetailImagePage';

export default DetailImagePage;