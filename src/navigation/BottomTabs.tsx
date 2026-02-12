import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AccountIcon from '@/components/icons/AccountIcon';
import OrderIcon from '@/components/icons/OrderIcon';
import PayoutIcon from '@/components/icons/PayoutIcon';
import PerformanceIcon from '@/components/icons/PerformanceIcon';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const indicatorPosition = useRef(new Animated.Value(0)).current;
    const insets = useSafeAreaInsets();

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
    const tabWidth = SCREEN_WIDTH / tabs.length;
    const indicatorWidth = tabWidth * 0.6;
    const indicatorTranslateX = indicatorPosition.interpolate({
        inputRange: tabs.map((_, i) => i),
        outputRange: tabs.map((_, i) =>
            tabWidth * i + (tabWidth - indicatorWidth) / 2
        ),
    });

    return (
        <View
            style={[
                styles.container,
                { paddingBottom: Math.max(insets.bottom, 12) }
            ]}
        >
            <View style={styles.tabsWrapper}>
                {tabs.map((tab, index) => (
                    <TabItem
                        key={tab.label}
                        Icon={tab.Icon}
                        label={tab.label}
                        isActive={activeTab === index}
                        onPress={() => handleTabPress(index)}
                    />
                ))}
            </View>
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
            activeOpacity={0.7}
        >
            <Icon
                width={22}
                height={22}
                fill={isActive ? '#3741D1' : '#7A8CA5'}
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: '#FFFFFF',
        paddingTop: 12,

        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 6,
            },
        }),
    },

    tabsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    label: {
        fontSize: 12,
        marginTop: 4,
        color: '#7A8CA5',
    },
    activeLabel: {
        color: '#3741D1',
        fontWeight: '600',
    },

});