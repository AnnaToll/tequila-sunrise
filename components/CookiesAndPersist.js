import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

const CookiesAndPersist = ({ itemsInCart, userId, children, persistor }) => {

    if (itemsInCart && userId) {
        return <PersistGate loading={null} persistor={persistor}>{ children }</PersistGate> 
    } else {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('persist:cart');
            localStorage.removeItem('persist:user');
        }
        return <>{ children }</>;
    }
}


const mapStateToProps = (state) => {
    return {
        itemsInCart: state.cart.itemsInCart,
        userId: state.user.userID
    }
}

export default connect(mapStateToProps)(CookiesAndPersist);