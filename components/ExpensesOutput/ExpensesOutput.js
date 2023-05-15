import { View, StyleSheet, Text } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

function ExpensesOutput({ expenses, period, fallbackText }) {
    let content = <Text style={styles.fallbackText}>{fallbackText}</Text>
    return (<View style={styles.container}>
        <ExpensesSummary expenses={expenses} period={period} />
        {expenses.length ? <ExpensesList expenses={expenses} /> : content}
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    fallbackText: {
        fontSize: 16,
        color: 'white',
        marginTop: 32,
        alignItems: 'center',
    }
});
export default ExpensesOutput;