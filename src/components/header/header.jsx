import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({onAddForm, show}) => {
    return (
        <header className="head">
            <h1>Addresses</h1>
            <button className="btn btn-add" onClick={onAddForm}>
                {show ? 'Close' : 'Add'}
            </button>
        </header>
    );
};

Header.propTypes = {
    onAddForm: PropTypes.func,
    show: PropTypes.bool,
};

export default Header;
