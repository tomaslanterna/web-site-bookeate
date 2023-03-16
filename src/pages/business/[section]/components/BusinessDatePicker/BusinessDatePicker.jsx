import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import BusinessDatePickerContainer from './styled-components/BusinessDatePickerContainer';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];



const BusinessDatePicker = ({date, onChangeDate}) => {
    
  return (
    <BusinessDatePickerContainer>
        <DatePicker defaultValue={dayjs(date, dateFormatList[0])} format={dateFormatList} onChange={onChangeDate}/>
    </BusinessDatePickerContainer>
  )
}

export default BusinessDatePicker