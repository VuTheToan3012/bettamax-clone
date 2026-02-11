import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import React from "react";
import { View, Text } from "react-native";
import Svg, { Polyline, Path, Circle, Text as SvgText } from "react-native-svg";

const WIDTH = 340;
const HEIGHT = 180;
const PADDING = 24;

interface RevenueChartProps {
  data?: number[];
}

export default function RevenueChart({ data: propData }: RevenueChartProps) {
    const data = propData || [7000, 9000, 6000, 10000, 4000, 8000, 5000, 9000, 3000, 6000];
    const data2 = [4200, 5200, 6100, 7000, 7800, 8600, 9300, 9800, 10200, 11000];
    
    const sum = (arr: number[]) => arr.reduce((total, v) => total + v, 0);
    const todayTotal = sum(data);
    const yesterdayTotal = sum(data2);
    const diff = todayTotal - yesterdayTotal;
    const percent = (diff / yesterdayTotal) * 100;
    const PROFIT_RATE = 0.3;
    const totalProfit = Math.round(todayTotal * PROFIT_RATE);
    const isPositive = percent >= 0;
    const changeColor = isPositive ? "#16A34A" : "#DC2626";
    const changeArrow = isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />;
    const labels = ["12 AM", "6 AM", "12 PM", "6 PM"];

    const maxValue = 10000;

    const points = data.map((v, i) => {
        const x = PADDING + (i * (WIDTH - PADDING * 2)) / (data.length - 1);
        const y = HEIGHT - PADDING - (v / maxValue) * (HEIGHT - PADDING * 2);
        return { x, y };
    });

    const linePoints = points.map(p => `${p.x},${p.y}`).join(" ");

    const fillPath = `
    M ${PADDING},${HEIGHT - PADDING}
    L ${linePoints.replace(/ /g, " L ")}
    L ${WIDTH - PADDING},${HEIGHT - PADDING}
    Z
  `;

    return (
        <View style={{ backgroundColor: "#ffffff", borderRadius: 12, padding: 16 }}>
            <Text style={{ fontWeight: "600" }}>Revenue over time</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
                <View>
                    <Text style={{ color: "#6B7280", fontSize: 12 }}>Total revenue</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: "700", lineHeight: 22, fontSize: 12 }}>
                            ${todayTotal.toLocaleString()}
                        </Text>
                        <Text style={{ color: changeColor, fontWeight: "500", lineHeight: 20, fontSize: 14 }}>
                            {changeArrow} {Math.abs(percent).toFixed(2)}%
                        </Text>
                    </View>
                </View>

                <View>
                    <Text style={{ color: "#6B7280", fontSize: 12 }}>Profit</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: "700" }}>${totalProfit.toLocaleString()}</Text>
                        <Text style={{ color: changeColor, fontWeight: "500", lineHeight: 20, fontSize: 14 }}>
                            {changeArrow} {Math.abs(percent).toFixed(2)}%
                        </Text>
                    </View>
                </View>
            </View>

            <Svg width={WIDTH} height={HEIGHT}>
                <Path d={fillPath} fill="#E6790F33" opacity={0.5} />
                <Polyline points={linePoints} fill="none" stroke="#F97316" strokeWidth={2} />
                {points.map((p, i) => (
                    <Circle key={i} cx={p.x} cy={p.y} r={3} fill="#F97316" />
                ))}
                <SvgText x={4} y={HEIGHT - PADDING} fontSize="10">$0</SvgText>
                <SvgText x={4} y={PADDING + 4} fontSize="10">$10k</SvgText>
                {labels.map((l, i) => {
                    const x = PADDING + (i * (WIDTH - PADDING * 2)) / (labels.length - 1);
                    return (
                        <SvgText key={i} x={x} y={HEIGHT - 4} fontSize="10" textAnchor="middle">
                            {l}
                        </SvgText>
                    );
                })}
            </Svg>

            <Text style={{ fontSize: 11, color: "#6B7280" }}>
                ($) Up to now · 08:00 PM
            </Text>
        </View>
    );
}