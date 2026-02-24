import DisputeIcon from "@/components/icons/DisputeIcon";
import WonDisputeIcon from "@/components/icons/WonDisputeIcon";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import LostDisputeIcon from "@/components/icons/LostDisputeIcon";
import SearchNotFoundIcon from "@/components/icons/SearchNotFoundIcon";

export interface Order {
  id: string;
  Orderid: string;
  Ordercode: string;
  date: string;
  datetime: string;
  cost: number;
  paymentStatus: "Paid" | "Refunded";
  fullfillmentStatus: "Unfulfilled" | "Partially fulfilled" | "Fulfilled";
  tax?: "Tax included" | "No";
  disputeStatus?: "In dispute" | "Won dispute" | "Lost dispute";
}

export const DATA: Order[] = [
  {
    id: "1",
    Orderid: "#12001",
    Ordercode: "ZO3FA-180425-BYHFA",
    date: "2025-11-26",
    datetime: "17:00",
    cost: 122.21,
    paymentStatus: "Paid",
    fullfillmentStatus: "Fulfilled",
    tax: "Tax included",
    disputeStatus: "In dispute",
  },
  {
    id: "2",
    Orderid: "#12002",
    Ordercode: "ZO3FA-180425-BYHFB",
    date: "2025-11-26",
    datetime: "17:00",
    cost: 145.63,
    paymentStatus: "Paid",
    fullfillmentStatus: "Unfulfilled",
    tax: "Tax included",
    disputeStatus: "Won dispute",   
  },
  {
    id: "3",
    Orderid: "#12003",
    Ordercode: "ZO3FA-180425-BYHFC",
    date: "2025-11-26",
    datetime: "17:00",
    cost: 135.95,
    paymentStatus: "Refunded",
    fullfillmentStatus: "Fulfilled",
    tax: "No",
    disputeStatus: "Lost dispute",
  },
];

interface Props {
  data: Order[];
}
const StatusBadge = ({
    label,
    type,
}: {
    label: string;
    type: "payment" | "fulfillment" | "tax" | "dispute";
}) => {
    const getBackground = () => {
        if (type === "payment") {
            return label === "Paid" ? "#D7F4DF" : "#ECEFF3";
        }
        if (type === "fulfillment") {
            if (label === "Fulfilled") return "#ECEFF3";
            if (label === "Unfulfilled") return "#FCEFC9";
            return "#FCEFC9";
        }
        if (type === "tax") return "#EDEEFF";
        if (type === "dispute") return "#F3E8FF";

        return "#E5E7EB";
    };
      const getTextColor = () => {
        if (type === "payment") {
            return label === "Paid" ? "#266F3C" : "#181F39";  
        }
        if (type === "fulfillment") {
            if (label === "Fulfilled") return "#181F39";      
            if (label === "Unfulfilled") return "#BC5312";    
            return "#B45309";                                  
        }
        if (type === "tax") return "#3741D1";                        
        return "#374151";
    };
    return (
        <View style={[styles.badge, { backgroundColor: getBackground(), borderColor: getTextColor() }]}>
            <Text style={[styles.badgeText, { color: getTextColor() }]}>{label}</Text>
        </View>
    );
};

const OrderList: React.FC<Props> = ({ data }) => {
  const renderItem = ({ item }: { item: Order }) => (
        <View style={styles.card}>
           
            <View style={styles.rowBetween}>
                <Text style={styles.code}>{item.Ordercode}</Text>
                <Text style={styles.price}>${item.cost.toFixed(2)}</Text>
            </View>

            <View style={styles.date}>
                <Text style={styles.subText}>
                    {item.Orderid} •
                </Text>
                <Text style={styles.dayText}>  {item.date}</Text>
                <Text style={styles.timeText}> {item.datetime}</Text>
            </View>

    
            <View style={styles.statusRow}>
                <StatusBadge label={item.paymentStatus} type="payment" />
                <StatusBadge
                    label={item.fullfillmentStatus}
                    type="fulfillment"
                />

                {item.tax && item.tax !== "No" && (
                    <StatusBadge label={item.tax} type="tax" />
                )}

                <>
                    {item.disputeStatus === "In dispute" && <DisputeIcon />}
                    {item.disputeStatus === "Won dispute" && <WonDisputeIcon />}
                    {item.disputeStatus === "Lost dispute" && <LostDisputeIcon />}
                </>


            </View>
        </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
      
      ListEmptyComponent={
        <View style={{ alignItems: 'center', justifyContent: 'center',flex: 1, marginTop: 150}}>
          <SearchNotFoundIcon />
          <Text style={styles.SearchNotFoundText}>Search not found.</Text>
        </View>
      }
    />
  );
};

export default OrderList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  code: {
    fontWeight: "600",
    fontSize: 14,
  },
  price: {
    fontWeight: "700",
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    color: "#546278",
    marginTop: 6,
  },
  date: {
    flexDirection: "row",
  },
   dayText: {
        fontSize: 12,
        color: "#181F39",
        marginVertical: 6,
    },
    timeText: {
        fontSize: 12,
        color: "#8B99B1",
        marginVertical: 6,
    },
    statusRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        marginRight: 6,
        marginTop: 4,
    },
    badgeText: {
        fontSize: 11,
        fontWeight: "500",
    },
    SearchNotFoundText: {
        marginBottom: 12,
        fontSize: 14, 
        fontFamily: 'Mona Sans',
        color: '#8B99B1',
    },
});