import styles from '@/components/styles/selectImage.module.css';
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react';

export interface IImageSelect {
    /**
     * @title 当前选中的值
     */
    value?: string;
    /**
     * @title image列表
     */
    list?: {
        url?: StaticImageData;
        alt?: string;
        value?: string;
    }[];
    selectedImages?: string[];
    /**
     * @title 选择事件
     */
    onSelect?: (v: string) => void;
}

const ImageSelect = (props: IImageSelect) => {
    const { list = [], onSelect, value, selectedImages } = props;
    const [_list, setList] = useState<{
        url?: StaticImageData;
        alt?: string;
        value?: string;
        selected?: boolean;
    }[]>(list);
    useEffect(() => {
        if (selectedImages && selectedImages.length) {
            const ilist: {
                url?: StaticImageData;
                alt?: string;
                value?: string;
                selected?: boolean;
            }[] = JSON.parse(JSON.stringify(list));
            for (let i = 0; i < selectedImages.length; i++) {
                for (let j = 0; j < ilist.length; j++) {
                    if (selectedImages[i] === ilist[j].value) {
                        ilist[j].selected = true;
                    }
                }
            }
            setList(ilist)
        } else {
            setList(list);
        }
    }, [selectedImages, list]);
    return <div className={styles.selectComp}>
        {
            _list && _list.map((item, index) => {
                if (item.selected) {

                    return <div className={`${styles.itemNoSelected} ${styles.itemNoDrop}`} key={index}>
                        <div className={styles.itemMask}>
                            已不可选
                        </div>
                        <Image alt={item.alt ?? ''} src={item.url as any} />
                    </div>
                }
                return <div onClick={() => onSelect && onSelect(item.value ?? '')} className={`${item.value === value ? `${styles.itemSelected}` : `${styles.itemNoSelected}`}`} key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="22" cy="22" r="22" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 22C0 9.80836 9.80836 0 22 0C34.1917 0 44 9.80836 44 22C44 34.1917 34.1917 44 22 44C9.80836 44 0 34.1917 0 22ZM21.175 31.075L35.75 16.5C35.75 16.5 37.125 15.125 35.75 13.75C34.375 12.375 33 13.75 33 13.75L19.25 27.5L11 19.25C11 19.25 9.62501 17.875 8.25001 19.25C6.87501 20.625 8.25001 22 8.25001 22L17.325 31.075C18.3334 32.0834 20.1667 32.0834 21.175 31.075Z" fill="#0091FF" />
                    </svg>
                    <Image alt={item.alt ?? ''} src={item.url as any} />
                </div>
            })
        }
    </div >
}

export default ImageSelect;