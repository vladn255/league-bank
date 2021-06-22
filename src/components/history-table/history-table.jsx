import { connect } from 'react-redux';

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

const mapStateToProps = ({ history }) => ({
    history
});

export default connect(mapStateToProps)(HistoryTable);