import * as echarts from 'echarts';
import styles from '@/components/styles/echarts.module.css';
import { useEffect, useRef } from 'react';

export interface IEchartsOptions {
    title: string;
    series: {
        name?: string;
        type: 'bar';
        data?: number[];
    }[];
    yAxisData: string[]
}

const EchartsLine = (props: IEchartsOptions) => {
    const { title, series, yAxisData } = props;
    // const yAxisData = ['Quality', 'Composition', 'Color', 'Depth of Field', 'Light'];
    const option = {
        title: {
            text: title,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: yAxisData,
        },
        series,
    };

    const echartsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (echartsRef.current) {
            const myChart = echarts.init(echartsRef.current);
            myChart.setOption(option);
        }
    }, []);
    return <div  className={styles.echartComp} ref={echartsRef}>
    </div>
}

export default EchartsLine;