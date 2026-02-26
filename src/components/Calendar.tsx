import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import CalendarIcon from './icons/CalendarIcon';


type QuickSelectOption = 'today' | 'week' | 'month' | 'year' | null;

interface DatePickerProps {
  value?: string;
  onDateChange: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  title?: string; 
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onDateChange,
  minDate,
  maxDate,
  title = 'Date picker',
  placeholder = 'Today',
}) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<string>('');
  const [activeQuickSelect, setActiveQuickSelect] = useState<QuickSelectOption>(null);

  const formatDateToString = useCallback((date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const handleQuickSelect = useCallback((option: Exclude<QuickSelectOption, null>) => {
    setActiveQuickSelect(option);
    const today = new Date();

    let targetDate: Date;
    switch (option) {
      case 'today':
        targetDate = today;
        break;
      case 'week':

        targetDate = new Date(today);
        targetDate.setDate(today.getDate() + (6 - today.getDay()));
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
    setActiveQuickSelect(null); 
  }, []);

  const handleApply = useCallback(() => {
    onDateChange(tempSelectedDate);
    setShowCalendar(false);
  }, [tempSelectedDate, onDateChange]);

  const handleOpen = useCallback(() => {
    const today = new Date();
    const todayString = formatDateToString(today);
    const dateToUse = value || todayString;

    setTempSelectedDate(dateToUse);
   
    setActiveQuickSelect(dateToUse === todayString ? 'today' : null);
    setShowCalendar(true);
  }, [value, formatDateToString]);

  const formatDisplayDate = useCallback((dateString: string): string => {
    if (!dateString) return placeholder;
   
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }, [placeholder]);

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
        <CalendarIcon />
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
              <Text style={styles.headerTitle}>{title}</Text>
                  <View style={{justifyContent:'center'}}>
                <TouchableOpacity
                onPress={() => setShowCalendar(false)}
                style={styles.closeButton}
                activeOpacity={0.7}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              </View>
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
              showsVerticalScrollIndicator={false}
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
              hideDayNames={true}
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
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  calendarIcon: {
    fontSize: 16,
  },
  inputText: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '400',
  },
  placeholder: {
    color: '#6B7280',
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
    maxHeight: '86%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1A1A1A',
    alignContent: 'center'
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
    height: 600
  },
  applyButton: {
    backgroundColor: '#5B5FEF',
    paddingVertical: 13,
    borderRadius: 99,
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