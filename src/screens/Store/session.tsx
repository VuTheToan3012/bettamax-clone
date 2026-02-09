import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, G } from "react-native-svg";



interface SessionItem {
  label: string;
  value: number;
}



const data: SessionItem[] = [
  { label: 'Mobile & tablet', value: 6754 },
  { label: 'Desktop', value: 1632 },
];


const COLORS = ["#5B5FED", "#34D399"]; // Xanh dương, Xanh lá

const SIZE = 180;
const STROKE_WIDTH = 28;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;



const formatPercentage = (value: number, total: number) => {
  return ((value / total) * 100).toFixed(2) + "%";
};


export default function SessionByDeviceChart() {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const changes = ["-2.61%", "2.61%"];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Session by device</Text>

      <View style={styles.contentContainer}>
        {/* Legend bên trái */}
        <View style={styles.legendContainer}>
          {data.map((item, index) => {
            const percentage = formatPercentage(item.value, totalValue);
            const change = changes[index];
            const isPositive = change.startsWith("2");

            return (
              <View key={index} style={styles.legendItem}>
                {/* Dot */}
                <View
                  style={[
                    styles.legendDot,
                    { backgroundColor: COLORS[index] },
                  ]}
                />

                {/* Info */}
                <View style={styles.legendInfo}>
                  <Text style={styles.legendLabel}>{item.label}</Text>
                  <View style={styles.statsRow}>
                    <Text style={styles.percentageText}>{percentage}</Text>
                    <View style={styles.changeContainer}>
                      <Text
                        style={[
                          styles.changeText,
                          isPositive ? styles.positiveChange : styles.negativeChange,
                        ]}
                      >
                        {isPositive ? "↗" : "↘"} {change.replace("-", "")}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

  
        <View style={styles.chartContainer}>
         <Svg width={SIZE} height={SIZE}>
  <G rotation="-90" origin={`${CENTER}, ${CENTER}`}>
    {(() => {
      let offset = 0;
      const GAP_LENGTH = 35;

      return data.map((item, index) => {
        const percent = item.value / totalValue;
        const arcLength =
          CIRCUMFERENCE * percent - GAP_LENGTH;

        const dashArray = `${arcLength} ${CIRCUMFERENCE}`;
        const dashOffset = -offset;

        offset += arcLength + GAP_LENGTH;

        return (
          <Circle
            key={index}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            stroke={COLORS[index]}
            strokeWidth={STROKE_WIDTH}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            fill="none"
            strokeLinecap="round"
          />
        );
      });
    })()}
  </G>
</Svg>


          {/* Text ở giữa */}
          <View style={styles.centerText}>
            <Text style={styles.valueText}>
              {totalValue.toLocaleString()}
            </Text>
            <Text style={styles.labelText}>total sessions</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    height:360
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 24,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  legendContainer: {
    flex: 1,
    gap: 20,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
    marginRight: 10,
  },
  legendInfo: {
    flex: 1,
  },
  legendLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  percentageText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  changeText: {
    fontSize: 14,
    fontWeight: "600",
  },
  positiveChange: {
    color: "#10B981",
  },
  negativeChange: {
    color: "#EF4444",
  },
  chartContainer: {
    position: "relative",
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  centerText: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },
  labelText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
});