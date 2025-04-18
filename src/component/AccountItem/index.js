import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/07c2b080eabf890e7d90e2de0eebd206~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=74bcbb5b&x-expires=1745071200&x-signature=%2FlvVhu5q%2BI9HTWCrPGJFAO%2B%2BPsU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Vũ Quang Huy</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>vuquanghuy</span>
            </div>
        </div>
    );
}

export default AccountItem;
