import HistoryTable from '../history-table/history-table.jsx';

const History = () => {
    return (
        <section className="history">
            <div className="history__wrapper">
                <h3 className="history__title">История конвертация</h3>
                <HistoryTable />
                <button className="button button--history" type="button">Очистить историю</button>
            </div>

        </section>
    )
}


export default History;