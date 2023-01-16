import Chart from "../Chart/Chart"

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Янв', value: 0 },
        { label: 'Фев', value: 0 },
        { label: 'Мар', value: 0 },
        { label: 'Апр', value: 0 },
        { label: 'Май', value: 0 },
        { label: 'Июн', value: 0 },
        { label: 'Июл', value: 0 },
        { label: 'Авг', value: 0 },
        { label: 'Сен', value: 0 },
        { label: 'Окт', value: 0 },
        { label: 'Ноя', value: 0 },
        { label: 'Дек', value: 0 },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth() // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}

export default ExpensesChart