import React, { useState } from "react";
import { View, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

const DateTimePickerDefault = ({type, buttonTitle, dateKey, setValue}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker=()=>{
        setDatePickerVisibility(true);
    }
    const hideDatePicker=()=>{
        setDatePickerVisibility(false);
    }

    const handleConfirm = (date) =>{
        if(type==="time"){
            const hour = date.getHours();
            const minute = date.getMinutes();
            const formattedTime = `${hour}:${minute}`;
            setValue((prevState)=>({
                ...prevState,
                [dateKey]:formattedTime
            }));
        }else{
            const formattedDate = date.toLocaleString.split('T')[0]
            setValue((prevState)=>({
                ...prevState,
                [dateKey]:date
            }));
        }
        hideDatePicker();
    }
    return(
        <View>
            <Button title={buttonTitle} onPress={showDatePicker} color="blue"/>
            <DateTimePicker
            isVisible={isDatePickerVisible}
            mode={type}
            locale="pt_BR"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            pickerContainerStyleIOS={{backgroundColor:"#fff"}}
            textColor="#000"
            />
        </View>
    )
}
export default DateTimePickerDefault;
