import { Fragment } from 'react';

import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const MainHeader = () => {
    return (
        <Fragment>
            <header className='main_header'>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
        </Fragment>
    )
}

export default MainHeader;