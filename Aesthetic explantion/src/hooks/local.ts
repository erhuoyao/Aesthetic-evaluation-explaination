import { useState } from "react";

export interface ISelectedImage {
    /**
     * @title 决策1、2、3、4、5...
     */
    id: string;
    /**
     * @title 决策1、2、3、4、5...中选中的那个图片
     */
    value: IFormat[];
}

export interface IFormat {
    id: string; // 分类
    selectedValue: string; // detail
    agree: boolean; // 是否同意
    questionnaire: {
        value: string;
        fraction: number;
    }[]; // 问卷
    questionnaire2?: {
        value: string;
        fraction: number;
    }[]; // 问卷
    questionnaire3?: {
        value: string;
        fraction: number;
    }; // 问卷
    questionnaire4?: {
        value: string;
        fraction: string;
    }; // 问卷
    myFraction?: number;
    myDetailFraction?: {
        myQuality?: number;
        myColor?: number;
        myComposition?: number;
        myDepth?: number;
        myLight?: number;
    };
}

/**
 * {
 *  1: [{
 *  selectedValue: '1',
 *  agree:boolean,
 *  questionnaire: [
 *  {
 *      value: '可理解性',
 *      fraction: number,
 *  }
 * ]
 * 
 * }],
 *  2: [1, 2, 3]
 * 
 * }
 */

class LocalData {
    set(params: ISelectedImage) {
        const data = this.get(params.id);
        console.log('data.isLocal', data)
        if (!data.isLocal) {
            const value = data.data;
            value[`${params.id}`] = params.value; // 分类id
            localStorage.setItem('selected-image', JSON.stringify(value));
        } else {
            const value = data.data;
            console.log('value:', value, value[`${params.id}`]);
            if (!value[`${params.id}`]) {
                value[`${params.id}`] = params.value; // 分类id
                localStorage.setItem('selected-image', JSON.stringify(value));
            } else {
                const paramsIndexData = value[`${params.id}`];
                const lindex = paramsIndexData.findIndex((item: IFormat) => item.selectedValue === params.value[0].selectedValue);
                if (lindex >= 0) {
                    paramsIndexData[lindex] = params.value[0];
                } else {
                    paramsIndexData[paramsIndexData.length] = params.value[0];
                }
                console.log(value);
                localStorage.setItem('selected-image', JSON.stringify(value));
            }
        }
    }

    get(id: string) {
        const dataStr = localStorage.getItem('selected-image') ?? '{}';
        const data = JSON.parse(dataStr);
        if (data && data[id])
            return {
                isLocal: true,
                data: data,
            };
        return {
            isLocal: false,
            data,
        };
    }
}

export const useLocal = new LocalData();