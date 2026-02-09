import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";

/* ================= MOCK DATA ================= */

const DATA = [
  {
    id: "p1",
    name: "Dynamics 365 Business Central on-premises 20 Microsoft Dynamics Business Central on-premises",
    value: 9200,
  },
  {
    id: "p2",
    name: "FAST Search Server 2010 for SharePoint Internet Microsoft Dynamics Business Central on-premises ",
    value: 6800,
  },
  {
    id: "p3",
    name: "Windows Server 2008 for Windows Essential Serv Microsoft Dynamics Business Central on-premises",
    value: 4800,
  },
  {
    id: "p4",
    name: "System Center Configuration Manager  ",
    value: 2500,
  },
  {
    id: "p5",
    name: "Internet Information Services Smooth Strea...",
    value: 572,
  },
];

/* ================= CONFIG ================= */

const LEFT_TEXT_WIDTH = 190;
const BAR_AREA_WIDTH = 120;
const ROW_HEIGHT = 28;
const BAR_HEIGHT = 28;
const BAR_RADIUS = 6;

/* ================= UTILS ================= */

const formatK = (value: number) => {
  if (value >= 1000) return (value / 1000).toFixed(1) + "k";
  return value.toString();
};

/* ================= COMPONENT ================= */

export default function TopProductBarChart() {
  const maxValue = Math.max(...DATA.map(i => i.value));
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleBarPress = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Top perform Product (by total order)
      </Text>

      <View style={{ marginTop: 12 }}>
        {DATA.map((item) => {
          const barWidth = (item.value / maxValue) * BAR_AREA_WIDTH;
          const isSelected = selectedId === item.id;

          return (
            <View key={item.id} style={styles.rowContainer}>
              {/* Tooltip hiển thị tên đầy đủ - ĐẶT TRÊN ĐẦU */}
              {isSelected && (
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipText}>{item.name}</Text>
                </View>
              )}

              <View style={styles.row}>
                {/* Product name */}
                <Text numberOfLines={1} style={styles.label}>
                  {item.name}
                </Text>

                {/* Chart - click để toggle */}
                <TouchableOpacity 
                  activeOpacity={0.7}
                  onPress={() => handleBarPress(item.id)}
                >
                  <Svg
                    width={BAR_AREA_WIDTH + 40}
                    height={ROW_HEIGHT}
                  >
                    {/* Bar - đổi màu khi được chọn */}
                    <Rect
                      x={0}
                      y={(ROW_HEIGHT - BAR_HEIGHT) / 2}
                      width={barWidth}
                      height={BAR_HEIGHT}
                      rx={BAR_RADIUS}
                      fill={isSelected ? "#22C55E" : "#7AE0A3"}
                    />

                    {/* Value */}
                    <SvgText
                      x={barWidth + 8}
                      y={ROW_HEIGHT / 2 + 4}
                      fontSize="11"
                      fill="#7AE0A3"
                    >
                      {formatK(item.value)}
                    </SvgText>
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>

      <Text style={styles.footer}>
        (#) Up to now - 08:00 PM
      </Text>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    overflow: "visible",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  rowContainer: {
    position: "relative",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: ROW_HEIGHT,
  },
  label: {
    width: LEFT_TEXT_WIDTH,
    fontSize: 12,
    color: "#374151",
    marginRight: 8,
  },
  footer: {
    marginTop: 10,
    fontSize: 11,
    color: "#16A34A",
  },
  tooltip: {
    position: "absolute",
    bottom: ROW_HEIGHT + 4, // Đặt phía trên thanh bar
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    borderRadius: 8,
    padding: 12,
    paddingHorizontal: 16,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tooltipText: {
    fontSize: 12,
    color: "#fff",
    lineHeight: 18,
  },
});