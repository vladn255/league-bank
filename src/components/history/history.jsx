import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../store/action.js';

import HistoryTable from '../history-table/history-table.jsx';

const History = ({ onClearHistory }) => {

    const handleClearHistoryClick = (evt) => {
        evt.preventDefault();
        onClearHistory();
    }

    return (
        <section className="history">
            <div className="history__wrapper">
                <h3 className="history__title">История конвертация</h3>
                <HistoryTable />
                <button className="button button--history" type="button" onClick={handleClearHistoryClick}>Очистить историю</button>
            </div>

        </section>
    )
}

History.propTypes = {
    onClearHistory: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onClearHistory() {
        dispatch(ActionCreator.clearHistory())
    },
})

export default connect(null, mapDispatchToProps)(History);