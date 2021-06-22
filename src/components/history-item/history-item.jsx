const HistoryItem = (exchangeEvent) => {
    if (exchangeEvent === undefined) {
        return;
    }

    const { date, currentSum, currentCurrency, exchangeSum, exchangeCurrency } = exchangeEvent.exchangeEvent;

    return (
        <tr className="table__row">
            <td className="table__data table__data--date">{date}</td>
            <td className="table__data table__data--initial">{`${currentSum} ${currentCurrency}`}</td>
            <td className="table__data table__data--converted">{`${exchangeSum} ${exchangeCurrency}`}</td>
        </tr>
    )
}

export default HistoryItem;