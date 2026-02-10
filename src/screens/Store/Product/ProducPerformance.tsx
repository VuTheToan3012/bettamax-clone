//ProductPerformance
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export interface Product {
    id: string;
    name: string;
    total: number;
    order: number;
    CR: number
    avatar?: string
}
export const DATA: Product[] = [
    {
        id: '1',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7,
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/10.jpg"
    },
    {
        id: '2',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7,
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/10.jpg"

    },
    {
        id: '3',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7,
        avatar: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/10.jpg"

    }, {
        id: '4',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    },
    {
        id: '5',
        name: 'iPad A16 11 inch Wifi (128GB)',
        total: 9623,
        order: 36,
        CR: 7
    },
    {
        id: '6',
        name: 'iPad A16 11 inch Wifi (128GB)',
        total: 9623,
        order: 36,
        CR: 7
    }, {
        id: '7',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    },
    {
        id: '8',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    },
    {
        id: '9',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    }, {
        id: '10',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 36
    },
    {
        id: '11',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    },
    {
        id: '12',
        name: 'Ipad pro 2036',
        total: 9623,
        order: 36,
        CR: 7
    },
];
const ProductCard = ({ item }: { item: Product }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('')
    };
    return (
        <View style={styles.container}>
            <View>
                <Image source={{}} />
            </View>
            <View >
                <Text   adjustsFontSizeToFit
  numberOfLines={1}>{item.name}</Text>
            </View>
            <View>
                 <Text style={styles.text}>Subtotal</Text>
                <Text>${item.total}</Text>
            </View>
            <View>
                <Text style={styles.text}>Order</Text>
                <Text>{item.order}</Text>
            </View>
            <View>
                <Text style={styles.text}>CR</Text>
                <Text style={{fontWeight:'600'}}> {item.CR}%</Text>
            </View>
        </View>
    );
};
const Product = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.card}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ProductCard item={item} />}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default Product
const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24,
        borderRadius: 16,
    },
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderColor: '#ECEFF3',
        gap: 30,
       
       
        flexDirection: 'row',
       
    },
    card: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        marginHorizontal: 16,
        marginTop: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 6,
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        color: '#181F39',
        lineHeight: 24,
    },
    text: {
        fontSize: 14,
        color: '#546278',
        marginBottom: 4,
        fontFamily: 'Mona Sans',
        fontWeight: '400',
        lineHeight: 22,
        overflow: 'hidden',
        alignItems: 'flex-start'
    },
    Bottomrow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    status: {
        fontSize: 12,
        fontWeight: '400',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        overflow: 'hidden',
        textAlign: 'right'
    },
    open: {
        backgroundColor: '#D7F4DF',
        color: '#266F3C',
    },
    deactivated: {
        backgroundColor: '#FEE2E2',
        color: '#B9221C',
    },
    role: {
        fontSize: 12,
        color: '#8B99B1',
        fontWeight: '500',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: "right",
        height: 30,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8
    },
    textFulfillment: {
        fontSize: 14,
        color: '#181F39',
        fontStyle: 'normal',
        fontFamily: 'Mona Sans',
        fontWeight: '400',
    },
    gap: {
        gap:10
    }
});