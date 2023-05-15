import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpenses() {
    const context = useContext(ExpensesContext);
    const expenses = context.expenses;
const recentExpenses = expenses.filter(expense => expense.date.getTime() > new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    return <ExpensesOutput period='Last 7 days' expenses={recentExpenses} fallbackText='No recent expenses' />
}

export default RecentExpenses;