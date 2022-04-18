import React from 'react';
import mealsImage from '../../assets/meals.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return(
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="TheMealsImg" />
        </div>
        </>
    )
}; 

export default Header;