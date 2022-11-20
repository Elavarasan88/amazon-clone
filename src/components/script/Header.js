import React from 'react'
import "../style/header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
        <img alt='amazon-logo' className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
        <div className='header__search'>
            <input className='header__searchInput' type='text'></input>
            <div className='header__searchInputIcon'><SearchIcon/></div>    
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <div className='header__optionLineOne'>Hello, sign in</div>
                <div className='header__optionLineTwo'>Account & Lists</div>
            </div>
            <div className='header__option'>
                <div className='header__optionLineOne'>Returns</div>
                <div className='header__optionLineTwo'>& Orders</div>
            </div>
            <div className='header__option__cart'>
                <div><ShoppingCartIcon fontSize='large'/></div>
                <div className='header__optionLineTwo'>Cart</div>
            </div>
        </div>
    </div>
  )
}

export default Header