import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
    const context = useContext(ExpensesContext);
    const expenses = context.expenses;

    return <ExpensesOutput period='Total' expenses={expenses} fallbackText='No expenses available' />
}

export default AllExpenses;