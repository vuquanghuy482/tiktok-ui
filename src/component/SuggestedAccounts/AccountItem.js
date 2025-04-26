import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccoutPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive offset={[-20, 0]} delay={[1000, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('acount-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/bbc3df45472d4682dee076a8f48bdc27~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=6dab8c7f&x-expires=1745848800&x-signature=Ys6DFofFl%2FgRZHHpWD%2Fi5wjgjPQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt="thaolinh"
                />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>maithaolinh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Lem</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
