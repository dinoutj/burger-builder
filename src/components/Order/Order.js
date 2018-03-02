import React from 'react';
import classes from './Order.css'

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad ()</p>
            <p>Price: <strong>$5.45</strong></p>
        </div>
    );
}

export default order;