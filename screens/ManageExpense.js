import { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const context = useContext(ExpensesContext);
    const expense = isEditing ? context.expenses.find(expense => expense.id === editedExpenseId) : null;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    deleteExpenseHandler = () => {
        context.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    cancelExpenseHandler = () => {
        navigation.goBack();
    }

    confirmExpenseHandler = () => {
        if (isEditing) {
            context.updateExpense(editedExpenseId,expense);
        } else {
            context.addExpense({description: 'New Expense', amount: 2.99, date: new Date('2023-05-08')});
        }
        navigation.goBack();
    }

    return (<View style={styles.container}>
        <ExpenseForm expense={expense} />   
        <View style={styles.buttonContainer}>
            <Button style={styles.buttonStyle} mode='flat' onPress={cancelExpenseHandler}>Cancel</Button>
            <Button style={styles.buttonStyle} onPress={confirmExpenseHandler}>{isEditing ? 'Update': 'Add'}</Button>
        </View>
        {isEditing &&
            <View style={styles.deleteContainer}>
                <IconButton icon='trash' size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler} />
            </View>}
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

export default ManageExpense;