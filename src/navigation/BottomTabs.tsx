import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

import AccountIcon from '@/components/icons/AccountIcon';
import OrderIcon from '@/components/icons/OrderIcon';
import PayoutIcon from '@/components/icons/PayoutIcon';
import PerformanceIcon from '@/components/icons/performance';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const indicatorPosition = useRef(new Animated.Value(0)).current;

    const tabs = [
        { Icon: PerformanceIcon, label: 'Performance' },
        { Icon: OrderIcon, label: 'All orders' },
        { Icon: PayoutIcon, label: 'Payout' },
        { Icon: AccountIcon, label: 'Account' },
    ];

    const handleTabPress = (index: number) => {
        setActiveTab(index);
        
        // Animate indicator to new position
        Animated.spring(indicatorPosition, {
            toValue: index,
            useNativeDriver: true,
            damping: 15,
            stiffness: 150,
        }).start();
    };

    // Calculate indicator translation
    const tabWidth = SCREEN_WIDTH / 4;
    const indicatorWidth = 120;
    const indicatorTranslateX = indicatorPosition.interpolate({
        inputRange: [0, 1, 2, 3],
        outputRange: [
            (tabWidth - indicatorWidth) / 2,
            tabWidth + (tabWidth - indicatorWidth) / 2,
            tabWidth * 2 + (tabWidth - indicatorWidth) / 2,
            tabWidth * 3 + (tabWidth - indicatorWidth) / 2,
        ],
    });

    return (
        <View style={styles.container}>
            {tabs.map((tab, index) => (
                <TabItem
                    key={tab.label}
                    Icon={tab.Icon}
                    label={tab.label}
                    isActive={activeTab === index}
                    onPress={() => handleTabPress(index)}
                />
            ))}

            <Animated.View
                style={[
                    styles.indicator,
                    {
                        transform: [{ translateX: indicatorTranslateX }],
                    },
                ]}
            />
        </View>
    );
};

interface TabItemProps {
    Icon: React.ComponentType<{ width?: number; height?: number; fill?: string }>;
    label: string;
    isActive?: boolean;
    onPress?: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ Icon, label, isActive, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.tab}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={label}
        >
            <Icon
                width={22}
                height={22}
                fill={isActive ? '#007AFF' : '#7A8CA5'}
            />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        position: 'relative',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 4,
        color: '#7A8CA5',
    },
    activeLabel: {
        color: '#007AFF',
        fontWeight: '600',
    },
    indicator: {
        position: 'absolute',
        bottom: 6,
        width: 120,
        height: 6,
        backgroundColor: '#007AFF',
        borderRadius: 10,
    },
});