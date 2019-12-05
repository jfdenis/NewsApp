import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => ( 
    <nav className='new-wrapper light-blue darken-3'> 
        <a  className='brand-logo center' href='#!'> {titulo} </a>
    </nav>
 );

Header.propTypes = {
    titulo: PropTypes.string.isRequired

}

export default Header;