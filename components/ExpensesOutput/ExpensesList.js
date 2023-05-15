import { FlatList, Text, View, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseItem = ({item}) => {
    return (<ExpenseItem {...item} />);
}

function ExpensesList({expenses}) {
    return (<View>
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={item => item.id}
         />
    </View>)
}

const styles = StyleSheet.create({

});

export default ExpensesList;