import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, {
    Path,
    Text as SvgText,
    Rect,
    Line,
} from 'react-native-svg';
import * as d3 from 'd3-shape';

const WIDTH = 340;
const HEIGHT = 180;
const PADDING = 20;
const BAR_GAP = 0;

const colors = ['#A5B4FC', '#818CF8', '#6366F1','#4F46E5'];

export interface CRChartItem {
    label: string;
    value: number;
    percent: string;
}

interface CRChartProps {
    data: CRChartItem[];
}

const CR = ({ data: propData }: CRChartProps) => {
    const data: CRChartItem[] = [
        { label: 'View product', value: 1457, percent: '100%' },
        { label: 'Add to cart', value: 729, percent: '52%' },
        { label: 'Reach CO', value: 378, percent: '26%' },
        { label: 'Total order', value: 137, percent: '10.53%' },
    ];
    const data2: CRChartItem[] = [
        { label: 'View product', value: 1457, percent: '100%' },
        { label: 'Add to cart', value: 729, percent: '52%' },
        { label: 'Reach CO', value: 378, percent: '26%' },
        { label: 'Total order', value: 145, percent: '10.53%' },
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    const barWidth =
        (WIDTH - PADDING * 2 - BAR_GAP * (data.length - 1)) / data.length;

    /* =========================
       Smooth line ÔM SƯỜN ĐỈNH
    ========================== */
    const linePoints: { x: number; y: number }[] = [];

    data.forEach((item, index) => {
        const barHeight =
            (item.value / maxValue) * (HEIGHT - PADDING * 2);

        const yTop = HEIGHT - PADDING - barHeight;

        const xLeft = PADDING + index * (barWidth + BAR_GAP);
        const xRight = xLeft + barWidth;

        // ôm sát mặt trên mỗi bar
        linePoints.push({ x: xLeft, y: yTop });
        linePoints.push({ x: xRight, y: yTop });
    });

    const smoothTopPath = d3
        .line<{ x: number; y: number }>()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveMonotoneX)(linePoints);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CR over time</Text>

            <View style={styles.summary}>
                <View>
                    <Text style={styles.subText}>Conversion rate</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.value}>5.53%</Text>
                        <Text style={styles.up}> +2.61%</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.subText}>Total order</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.value}>137</Text>
                        <Text style={styles.down}> </Text>
                    </View>
                </View>
            </View>

            <Svg width={WIDTH} height={HEIGHT}>
                {/* Bars */}
                {data.map((item, index) => {
                    const barHeight =
                        (item.value / maxValue) * (HEIGHT - PADDING * 2);

                    const x = PADDING + index * (barWidth + BAR_GAP);
                    const y = HEIGHT - PADDING - barHeight;

                    return (
                        <React.Fragment key={index}>
                            <Rect
                                x={x}
                                y={y}
                                width={barWidth}
                                height={barHeight}
                                rx={8}
                                fill={colors[index]}
                            />

                            {/* Grid */}
                            <Line
                                x1={x + barWidth}
                                y1={PADDING}
                                x2={x + barWidth}
                                y2={HEIGHT - PADDING}
                                stroke="#CBD5E1"
                                strokeWidth={0.8}
                                strokeDasharray="3 3"
                            />


                            {/* Value */}
                            <SvgText
                                x={x + barWidth / 2}
                                y={y - 6}
                                fontSize={12}
                                fill="#1E3A8A"
                                fontWeight="600"
                                textAnchor="middle"
                            >
                                {item.value}
                            </SvgText>

                            {/* Percent */}
                            <SvgText
                                x={x + barWidth / 2}
                                y={y + barHeight / 2 - 8}
                                fontSize={11}
                                fill="#E0E7FF"
                                fontWeight="600"
                                textAnchor="middle"
                            >
                                {item.percent}
                            </SvgText>

                            {/* Label */}
                            <SvgText
                                x={x + barWidth / 2}
                                y={HEIGHT}
                                fontSize={10}
                                fill="#374151"
                                textAnchor="middle"
                            >
                                {item.label}
                            </SvgText>
                        </React.Fragment>
                    );
                })}

                {/* Smooth line ôm sườn đỉnh */}
                {smoothTopPath && (
                    <Path
                        d={smoothTopPath}
                        stroke="#1116d3"
                        strokeWidth={3}
                        fill="none"
                        strokeLinecap="round"
                    />
                )}
            </Svg>

            <Text style={styles.footer}>
                ($) Up to now · 08:00 PM
            </Text>
        </View>
    );
};

export default CR;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
    },
    title: {
        fontWeight: '600',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    subText: {
        color: '#6B7280',
        fontSize: 12,
    },
    value: {
        fontWeight: '700',
        fontSize: 16,
    },
    up: {
        color: 'green',
        fontSize: 14,
        lineHeight: 22,
    },
    down: {
        color: 'red',
        fontSize: 14,
        lineHeight: 22,
    },
    footer: {
        fontSize: 11,
        color: '#6B7280',
    },
});
