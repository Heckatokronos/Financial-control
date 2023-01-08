import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
    
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter()
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label className='expenses-filter label'>Интересующий год</label>
                <select value={props.selected} className='expenses-filter select' onChange={dropdownChangeHandler}>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                </select>
            </div>
        </div>
    )
}