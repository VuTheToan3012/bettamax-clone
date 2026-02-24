import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    FlatList,
    TextInput,
} from "react-native";
import PerformanceHeader from "@/components/PerformanceHeader";
import OrderList, { DATA, Order } from "./OrderList";
import FilterIcon from "@/components/icons/FilterIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import DisputeIcon from "@/components/icons/DisputeIcon";
import WonDisputeIcon from "@/components/icons/WonDisputeIcon";
const paymentOptions = ["Paid", "Refunded"];
const fulfillmentOptions = [
    "Fulfilled",
    "Unfulfilled",
    "Partially fulfilled",
];
const disputeOptions = ["In dispute ", "Won dispute", "Lost dispute"];

const Allorders = () => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [activeSheet, setActiveSheet] = useState<
        "payment" | "fulfillment" | "dispute" | null>(null);

    const [searchText, setSearchText] = useState("");
    const [payment, setPayment] = useState<string[]>([]);
    const [fulfillment, setFulfillment] = useState<string[]>([]);
    const [dispute, setDispute] = useState<string[]>([]);

    const toggle = (
        value: string,
        list: string[],
        setList: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (list.includes(value)) {
            setList(list.filter((i) => i !== value));
        } else {
            setList([...list, value]);
        }
    };

    const filteredData: Order[] = useMemo(() => {
        return DATA.filter((item) => {
            const keyword = searchText.trim().toLowerCase();

            const matchSearch =
                keyword === "" ||
                item.Orderid.toLowerCase().includes(keyword) ||
                item.Ordercode.toLowerCase().includes(keyword);

            const matchPayment =
                payment.length === 0 || payment.includes(item.paymentStatus);

            const matchFulfillment =
                fulfillment.length === 0 ||
                fulfillment.includes(item.fullfillmentStatus);

            const matchDispute =
                dispute.length === 0 ||
                dispute.includes(item.disputeStatus || "");

            return (
                matchSearch &&
                matchPayment &&
                matchFulfillment &&
                matchDispute
            );
        });
    }, [searchText, payment, fulfillment, dispute]);

    return (
        <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
            <PerformanceHeader />

            {/* SEARCH + FILTER */}
            <View style={styles.topContainer}>
                <View style={styles.searchBox}>
                    <SearchIcon />
                    <TextInput
                        placeholder="Search by ID, code..."
                        placeholderTextColor="#8B99B1"
                        style={styles.text}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>


                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.filterBtn}
                        onPress={() => setFilterVisible(true)}
                    >
                        <FilterIcon />
                        <Text>Filter</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <OrderList data={filteredData} />

            {/* MAIN FILTER MODAL */}
            <Modal visible={filterVisible} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setFilterVisible(false)}>
                            <Text style={{ fontSize: 16 }}>✕ Filter</Text>
                        </TouchableOpacity>
                    </View>

                    <FilterRow
                        title="Payment status"
                        values={payment}
                        onPress={() => setActiveSheet("payment")}
                    />

                    <FilterRow
                        title="Fulfillment status"
                        values={fulfillment}
                        onPress={() => setActiveSheet("fulfillment")}
                    />

                    <FilterRow
                        title="Dispute status"
                        values={dispute}
                        onPress={() => setActiveSheet("dispute")}
                    />

                    <View style={styles.bottomRow}>
                        <TouchableOpacity
                            style={styles.resetBtn}
                            onPress={() => {
                                setPayment([]);
                                setFulfillment([]);
                                setDispute([]);
                            }}
                        >
                            <Text>Reset</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.applyBtn}
                            onPress={() => setFilterVisible(false)}
                        >
                            <Text style={{ color: "#fff" }}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* SUB SHEET */}
            <Modal visible={activeSheet !== null} animationType="slide" transparent>
                <View style={styles.sheetOverlay}>
                    <View style={styles.sheet}>
                        <View style={styles.sheetHeader}>
                            <Text style={{ fontWeight: "600" }}>
                                {activeSheet === "payment"
                                    ? "Payment status"
                                    : activeSheet === "fulfillment"
                                        ? "Fulfillment status"
                                        : "Dispute status"}
                            </Text>

                            <TouchableOpacity onPress={() => setActiveSheet(null)}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={
                                activeSheet === "payment"
                                    ? paymentOptions
                                    : activeSheet === "fulfillment"
                                        ? fulfillmentOptions
                                        : disputeOptions
                            }
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => {
                                const list =
                                    activeSheet === "payment"
                                        ? payment
                                        : activeSheet === "fulfillment"
                                            ? fulfillment
                                            : dispute;

                                const setList =
                                    activeSheet === "payment"
                                        ? setPayment
                                        : activeSheet === "fulfillment"
                                            ? setFulfillment
                                            : setDispute;

                                return (
                                    <TouchableOpacity
                                        style={styles.optionRow}
                                        onPress={() => toggle(item, list, setList)}
                                    >
                                        <View
                                            style={[
                                                styles.checkbox,
                                                list.includes(item) && styles.checked,
                                            ]}
                                        />
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <TouchableOpacity
                            style={styles.confirmBtn}
                            onPress={() => setActiveSheet(null)}
                        >
                            <Text style={{ color: "#fff" }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const FilterRow = ({
    title,
    values,
    onPress,
}: {
    title: string;
    values: string[];
    onPress: () => void;
}) => (
    <TouchableOpacity style={styles.row} onPress={onPress}>
        <View>
            <Text style={{ fontWeight: "500" }}>{title}</Text>
            <View style={styles.tagRow}>
                {values.map((v) => (
                    <View key={v} style={styles.tag}>
                        <Text style={{ fontSize: 12 }}>{v}</Text>
                    </View>
                ))}
            </View>
        </View>
        <Text style={{ fontSize: 20 }}>+</Text>
    </TouchableOpacity>
);

export default Allorders;

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 10,
    },
    searchBox: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderColor: "#E2E8F0",
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 12,
        height: 42,
        alignItems: "center",
        gap: 8,
    },
    filterBtn: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        flex: 1,
        fontSize: 14,
        color: "#000",
    },
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    header: {
        marginBottom: 20,
    },
    row: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tagRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 6,
    },
    tag: {
        backgroundColor: "#EEF2FF",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginRight: 6,
        marginTop: 4,
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",
    },
    resetBtn: {
        padding: 14,
        borderRadius: 12,
        backgroundColor: "#f1f5f9",
        width: "48%",
        alignItems: "center",
    },
    applyBtn: {
        padding: 14,
        borderRadius: 12,
        backgroundColor: "#4F46E5",
        width: "48%",
        alignItems: "center",
    },
    sheetOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    sheet: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: "70%",
    },
    sheetHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: "#999",
        marginRight: 12,
        borderRadius: 4,
    },
    checked: {
        backgroundColor: "#4F46E5",
    },
    confirmBtn: {
        marginTop: 20,
        backgroundColor: "#4F46E5",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
});