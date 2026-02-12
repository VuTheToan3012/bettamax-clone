//index
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';
import StoreIcon from '@/components/icons/StoreIcon';


export interface Store {
    id: string;
    name: string;
    status: 'Open' | 'Deactivated';
    fulfillment: string;
    website: string;
    role: 'Owner' | 'Staff';
}

export const DATA: Store[] = [
    {
        id: '1',
        name: 'Dianne Russell',
        fulfillment: 'Tu Nguyen',
        website: 'diannerussell.com',
        status: 'Open',
        role: 'Owner',
    },
    {
        id: '2',
        name: 'Nineteen Eighty-Four',
        fulfillment: 'Self fulfill store',
        website: 'nineteeneightyfour.shop',
        status: 'Open',
        role: 'Owner',
    },
    {
        id: '3',
        name: 'Starship Troopers',
        fulfillment: 'FusionEdge Fulfillment',
        website: 'starshiptroopers.us',
        status: 'Deactivated',
        role: 'Staff',
    },
];

const StoreCard = ({ item }: { item: Store }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Storeperformance', { storeId: item.id, storeName: item.name });
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.container}>
                <View style={styles.iconborder}><StoreIcon /></View>
                <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.text}>
                        Fulfillment: <Text style={styles.textFulfillment} numberOfLines={1}
                            ellipsizeMode="tail">{item.fulfillment}</Text>
                    </Text>
                    <Text style={styles.text}>{item.website}</Text>
                </View>

                <View style={styles.Bottomrow}>
                    <Text
                        style={[
                            styles.status,
                            item.status === 'Open' ? styles.open : styles.deactivated,
                        ]}
                    >
                        {item.status}
                    </Text>
                    <Text style={styles.role}>{item.role}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const Store = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Header />
                <View style={styles.card}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <StoreCard item={item} />}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Store

const styles = StyleSheet.create({
    image: {
        width: 24,
        height: 24,
        borderRadius: 2,
    },
    container: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderColor: '#ECEFF3',
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        height: 120
    },
    card: {
        flex: 1,
        backgroundColor: '#f2f2f2',
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
    iconborder:{
        width:24,
        height:24,
        borderRadius:5,
        backgroundColor:'#D6D4FE',
        alignItems:'center',
        justifyContent:'center'
    }
});