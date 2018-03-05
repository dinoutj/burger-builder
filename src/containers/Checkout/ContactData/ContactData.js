import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        customer: {
            name: '',
            address: {
                street: '',
                zipCode: '',
                country: ''
            },
            email: ''
        },
        deliveryMethod: ''
    }

    orderHandler = (event) => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Dino',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '123213',
                    country: 'Croatia'
                },
                email: 'test@test.hr'
            },
            deliveryMethod: 'fasttest'
        }
        this.setState({ loading: true });
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            }).catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="your street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="your postal" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return form;
    }
}

export default ContactData;