import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import DATA from '@/types';
import type { Product } from '@/types';
const ProductItem = ({ item }: { item: Product }) => {
    return (
        <View style={styles.card}>

            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <View style={styles.traffic}>
                        <Text>{item.traffic}</Text>
                    </View>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.label}>Subtotal</Text>
                    <Text style={styles.value}>{item.subtotal}</Text>
                </View>

                <View style={styles.statItem}>
                    <Text style={styles.label}>Order</Text>
                    <Text style={styles.value}>{item.order}</Text>
                </View>

                <View style={styles.statItem}>
                    <Text style={styles.label}>CR</Text>
                    <Text style={styles.value}>{item.cr}</Text>
                </View>
            </View>
        </View>
    );
};


export default function Traffic() {
    return (
        <FlatList

            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductItem item={item} />}
            contentContainerStyle={{ padding: 16 }}
            showsVerticalScrollIndicator={false}
        />
    );
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#F7F8FA',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
    },

    avatar: {
        width: 28,
        height: 28,
        borderRadius: 8,
        marginRight: 12,
    },

    content: {
        flex: 1,
    },

    title: {
        fontSize: 14,
        fontWeight: '400',
        color: '#1A1A1A',
        marginBottom: 8,
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    statItem: {
        flex: 1,
    },

    label: {
        fontSize: 12,
        color: '#8E8E93',
    },

    value: {
        fontSize: 13,
        fontWeight: '600',
        marginTop: 2,
    },
    traffic: {
        borderRadius: 24,
        backgroundColor: "#48ddc7",
        alignContent:'center',
        justifyContent: 'center'
    }
});
