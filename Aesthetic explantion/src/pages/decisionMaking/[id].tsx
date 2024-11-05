import { useRouter } from 'next/router';
import { Button } from 'antd';
import styles from './index.module.css';
import '@/app/globals.css';
import ImageSelect from '@/components/SelectImage';
import { useCallback, useEffect, useState } from 'react';
import { useImageList } from '../../hooks/hooks';
import Head from 'next/head';
import { useLocal } from '@/hooks/local';
import { message } from 'antd';
import DefaultLayout from '@/layout/Default/IndexLayout';

const DecisionMaking = () => {
    const router = useRouter();
    const { id } = router.query;
    const [imgList] = useImageList(id as string | undefined);
    const [selectedImages, setSelectImages] = useState<string[]>([]);
    const [messageApi, contextHolder] = message.useMessage();
    /**
     * 获取查看之前选择的数据
     */
    useEffect(() => {
        // 这个id是categoryId
        if (id) {
            const data = useLocal.get(id as string);
            const value = data.data;
            console.log(value[id as string]);
            if (value[id as string]) {
                // 说明categoryId中已经有数据被选择了
                const selectedData = value[id as string];
                const selectList: string[] = selectedData.map((selected: any) => selected.selectedValue);
                setSelectImages(selectList)
            }
            if (value && value[id as string] && value[id as string].length >= 3) {
                if (id === '1') {
                    router.replace('/select/2')
                }

                if (id === '2') {
                    router.replace('/select/3')
                }

                if (id === '3') {
                    router.replace('/select/1')
                }
            }
        }

    }, [id]);
    const [selectValue, setSelectValue] = useState('');
    const onSelect = (v: string) => {
        setSelectValue(v);
    }

    const onSubmit = useCallback((v: string) => {
        if (!v || v === '') {
            return messageApi.open({
                type: 'error',
                content: '必须选择一项图片后才可以操作',
            });
        }
        if (id === '1') {
            router.replace(`/detail/${id}/${v}`);
        } else if (id === '2') {
            router.replace(`/detail2/${id}/${v}`);
        } else if (id === '3') {
            router.replace(`/detail3/${id}/${v}`);
        }
    }, [id])

    return <>
        <DefaultLayout
            title='选择图片'
            headerChildren={
                <h1 className={styles.title}>请您从如下图中任意选择一张，进行图片审美判断</h1>
            }
            footerChildren={
                <Button type="primary" onClick={() => onSubmit(selectValue)}>确认</Button>
            }
        >
            <div className={styles.content}>
                {contextHolder}
                <ImageSelect selectedImages={selectedImages} onSelect={(v) => onSelect(v)} list={imgList as any[]} value={selectValue} />
            </div>
        </DefaultLayout>
    </>
}

export default DecisionMaking;