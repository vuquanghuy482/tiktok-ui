import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAcounts.module.scss'
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestAccounts;