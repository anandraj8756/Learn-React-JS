import './ExpenseItem.css'


function ExpenseItem() {
    return (
    <div className="expense-item">
        <div>3-May-2021</div>
        <div className="expense-item__description">
            <h2>Car Insurence</h2>
            <div className="expense-item__price">$400</div>
        </div>
    </div>
    );
}

export default ExpenseItem;