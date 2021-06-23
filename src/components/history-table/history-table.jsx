import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HistoryItem from '../history-item/history-item.jsx';
import { getRandomInteger } from '../../utils.js';

const HistoryTable = ({history}) => {

    if (history.length === 0) {
        return null;
    }

    return (
        <table className="table">
            <tbody className="table__body">
                {history.map((exchangeEvent) => <HistoryItem key={getRandomInteger(0, 10000).toString()} exchangeEvent={exchangeEvent} />)}
            </tbody>
        </table>
    )
}

HistoryTable.propTypes = {
    history: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = ({ history }) => ({
    history
});

export default connect(mapStateToProps)(HistoryTable);