import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import {} from "../redux/actions/cartActions";


const Checkout = ({ sum, items }) => {


    return ( 
        <main>
            <h1>Tack för din beställning!</h1>
            <h3>Beställning är genomförd och betald. Hoppas du blir nöjd med ditt köp :)</h3>
        </main>
     );
}

const mapStateToProps = (state) => {
    return {
        sum: state.totalSum,
        items: state.items
    }
}

 
export default connect(mapStateToProps)(Checkout);