import { createContext, useReducer } from "react";

const DummyData = [{
    id: 'e1',
    description: 'flat white',
    amount: 2.99,
    date: new Date('2023-05-12')
}, {
    id: 'e2',
    description: 'croissant',
    amount: 1.50,
    date: new Date('2023-05-12')
}, {
    id: 'e3',
    description: 'notebook',
    amount: 2.99,
    date: new Date('2023-04-15')
}, {
    id: 'e4',
    description: 'pen',
    amount: 2.00,
    date: new Date('2023-03-23')
}];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = Math.random().toString() + new Date().getTime().toString();
            return [...state, {...action.payload, id}];
        case 'UPDATE':
            const updated = state.map(expense => {
                if (expense.id === action.payload.id) {
                    return {...expense, ...action.payload.data};
                } else {
                    return expense;
                };
            });
            return updated;
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload);
        default:
            return state;
    }
}    

const ExpensesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expensesReducer, DummyData || []);

    const addExpense = (expense) => {
        dispatch({ type: 'ADD', payload: expense });
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    }

    const updateExpense = (expense) => {
        dispatch({ type: 'UPDATE', payload: {id, data:expense} });
    }

    return (<ExpensesContext.Provider value={{
        expenses: state,
        addExpense,
        deleteExpense,
        updateExpense
    }}>
        {children}
    </ExpensesContext.Provider>);
}

export default ExpensesContextProvider;