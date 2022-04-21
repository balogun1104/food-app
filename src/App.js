import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    return(
        <CartProvider>
           <Header onShow={showCartHandler}/>
          {cartIsShown && <Cart onHide={hideCartHandler} />}
           <main>
               <Meals />
           </main>
        </CartProvider>
    )
}

export default App