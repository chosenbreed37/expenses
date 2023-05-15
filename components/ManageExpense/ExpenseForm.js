import { View, StyleSheet } from "react-native";
import Input from "./Input";

function ExpenseForm() {
    const amountChangeHandler = (text) => { }
    return (
        <View>
            <View style={styles.inputRow}>
                <Input style={styles.inputRowItem} label='Date' textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { }
                }} />
                <Input style={styles.inputRowItem} label='Amount' textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler
                }} />
            </View>
            <Input label='Description' textInputConfig={{
                multiline: true,
                //autoCorrect: true
                //autoCapitalize: 'sentences'
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputRowItem: {
        flex: 1
    }
});

export default ExpenseForm;