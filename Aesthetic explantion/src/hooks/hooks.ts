import { useEffect, useState } from 'react';
import One from '../../public/select-image/1.png';
import Two from '../../public/select-image/2.png';
import Three from '../../public/select-image/3.png';
import Four from '../../public/select-image/4.png';
import Five from '../../public/select-image/5.png';
import Six from '../../public/select-image/6.png';
import Seven from '../../public/select-image/7.png';
import Eight from '../../public/select-image/8.png';
import Nine from '../../public/select-image/9.png';
import { StaticImageData } from 'next/image';

export const useImageList = (id: string | undefined) => {
    const [imgList, setImageList] = useState<{
        url?: StaticImageData;
        alt?: string;
        value?: string;
    }[]>([]);
    useEffect(() => {
        if (id) {
            setImageList(selectImage(id));
        }
    }, [id]);

    const selectImage = (_id: string): {
        url?: StaticImageData;
        alt?: string;
        value?: string;
    }[] => {
        switch (_id) {
            case '1':
                return [
                    {
                        value: '1',
                        url: One,
                        alt: '1'
                    },
                    {
                        value: '2',
                        url: Two,
                        alt: '2'
                    },
                    {
                        value: '3',
                        url: Three,
                        alt: '3'
                    },
                ];


            case '2':
                return [
                    {
                        value: '1',
                        url: Four,
                        alt: '1'
                    },
                    {
                        value: '2',
                        url: Five,
                        alt: '2'
                    },
                    {
                        value: '3',
                        url: Six,
                        alt: '3'
                    },
                ];
            case '3':
                return [
                    {
                        value: '1',
                        url: Seven,
                        alt: '1'
                    },
                    {
                        value: '2',
                        url: Eight,
                        alt: '2'
                    },
                    {
                        value: '3',
                        url: Nine,
                        alt: '3'
                    },
                ];
            default:
                return [
                    {
                        value: '1',
                        url: One,
                        alt: '1'
                    },
                    {
                        value: '2',
                        url: Two,
                        alt: '2'
                    },
                    {
                        value: '3',
                        url: Three,
                        alt: '3'
                    },
                ];
        }
    }

    return [imgList, setImageList]
}