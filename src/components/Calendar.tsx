import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';


type QuickSelectOption = 'today' | 'week' | 'month' | 'year';

interface DatePickerProps {
  value?: string; // Format: YYYY-MM-DD
  onDateChange: (date: string) => void;
  minDate?: string;
  maxDate?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onDateChange,
  minDate,
  maxDate,
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<string>('');
  const [activeQuickSelect, setActiveQuickSelect] = useState<QuickSelectOption>('today');

  const formatDateToString = useCallback((date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const handleQuickSelect = useCallback((option: QuickSelectOption) => {
    setActiveQuickSelect(option);
    const today = new Date();
    
    let targetDate: Date;
    switch (option) {
      case 'today':
        targetDate = today;
        break;
      case 'week':
        targetDate = new Date(today);
        targetDate.setDate(today.getDate() + (7 - today.getDay()));
        break;
      case 'month':
        targetDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'year':
        targetDate = new Date(today.getFullYear(), 11, 31);
        break;
    }
    
    setTempSelectedDate(formatDateToString(targetDate));
  }, [formatDateToString]);

  const onDayPress = useCallback((day: DateData) => {
    setTempSelectedDate(day.dateString);
    setActiveQuickSelect('today');
  }, []);

  const handleApply = useCallback(() => {
    onDateChange(tempSelectedDate);
    setShowCalendar(false);
  }, [tempSelectedDate, onDateChange]);

  const handleOpen = useCallback(() => {
    const today = new Date();
    setTempSelectedDate(value || formatDateToString(today));
    setShowCalendar(true);
  }, [value, formatDateToString]);

  const formatDisplayDate = useCallback((dateString: string): string => {
    if (!dateString) return 'Today';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, []);

  const getMarkedDates = useCallback(() => {
    if (!tempSelectedDate) return {};
    
    return {
      [tempSelectedDate]: {
        selected: true,
        selectedColor: '#5B5FEF',
      },
    };
  }, [tempSelectedDate]);

  return (
    <>
      <TouchableOpacity
        style={styles.input}
        onPress={handleOpen}
        activeOpacity={0.7}
      >
        <Text style={[styles.inputText, !value && styles.placeholder]}>
          {formatDisplayDate(value || '')}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={showCalendar}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Date picker</Text>
              <TouchableOpacity 
                onPress={() => setShowCalendar(false)}
                style={styles.closeButton}
                activeOpacity={0.7}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickSelectContainer}>
              <TouchableOpacity
                style={[
                  styles.quickSelectButton,
                  activeQuickSelect === 'today' && styles.quickSelectButtonActive
                ]}
                onPress={() => handleQuickSelect('today')}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.quickSelectText,
                  activeQuickSelect === 'today' && styles.quickSelectTextActive
                ]}>
                  Today
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.quickSelectButton,
                  activeQuickSelect === 'week' && styles.quickSelectButtonActive
                ]}
                onPress={() => handleQuickSelect('week')}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.quickSelectText,
                  activeQuickSelect === 'week' && styles.quickSelectTextActive
                ]}>
                  This week
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.quickSelectButton,
                  activeQuickSelect === 'month' && styles.quickSelectButtonActive
                ]}
                onPress={() => handleQuickSelect('month')}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.quickSelectText,
                  activeQuickSelect === 'month' && styles.quickSelectTextActive
                ]}>
                  This month
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.quickSelectButton,
                  activeQuickSelect === 'year' && styles.quickSelectButtonActive
                ]}
                onPress={() => handleQuickSelect('year')}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.quickSelectText,
                  activeQuickSelect === 'year' && styles.quickSelectTextActive
                ]}>
                  This year
                </Text>
              </TouchableOpacity>
            </View>

            <CalendarList
              current={tempSelectedDate || undefined}
              onDayPress={onDayPress}
              markedDates={getMarkedDates()}
              pastScrollRange={60}
              futureScrollRange={60}
              scrollEnabled={true}
              showScrollIndicator={true}
              horizontal={false}
              pagingEnabled={false}
              calendarHeight={320}
              minDate={minDate}
              maxDate={maxDate}
              theme={{
                backgroundColor: '#FFFFFF',
                calendarBackground: '#FFFFFF',
                textSectionTitleColor: '#9CA3AF',
                selectedDayBackgroundColor: '#5B5FEF',
                selectedDayTextColor: '#FFFFFF',
                todayTextColor: '#c6c9ff',
                dayTextColor: '#1A1A1A',
                textDisabledColor: '#D1D5DB',
                dotColor: '#5B5FEF',
                selectedDotColor: '#FFFFFF',
                arrowColor: '#5B5FEF',
                monthTextColor: '#1A1A1A',
                indicatorColor: '#5B5FEF',
                textDayFontSize: 14,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 12,
                textDayFontWeight: '400',
                textMonthFontWeight: '600',
                textDayHeaderFontWeight: '600',
              }}
              style={styles.calendarList}
            />

            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApply}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>

            <View style={styles.bottomHandle} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: 180,
    elevation: 4,
    margin: 22,
    height: 44,
  },
  inputText: {
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  placeholder: {
    color: '#9CA3AF',
    fontWeight: '400',
  },
  icon: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
    maxHeight: '75%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1A1A1A',
    alignContent:'center'
  },
  closeButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 26,
    color: '#6B7280',
    fontWeight: '300',
  },
  quickSelectContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 6,
  },
  quickSelectButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 7,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
  },
  quickSelectButtonActive: {
    backgroundColor: '#E0E7FF',
  },
  quickSelectText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  quickSelectTextActive: {
    color: '#5B5FEF',
    fontWeight: '600',
  },
  calendarList: {
    maxHeight: 380,
  },
  applyButton: {
    backgroundColor: '#5B5FEF',
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomHandle: {
    width: 80,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
  },
});

export default DatePicker;