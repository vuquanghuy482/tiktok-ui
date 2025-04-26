import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/bbc3df45472d4682dee076a8f48bdc27~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=6dab8c7f&x-expires=1745848800&x-signature=Ys6DFofFl%2FgRZHHpWD%2Fi5wjgjPQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt="maithaolinh"
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>maithaolinh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Lem</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>1.4M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>9.6M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
