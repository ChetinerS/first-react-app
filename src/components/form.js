import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clientNo: ''
        }
    }

    onChange = (e) => {
        this.setState({
            clientNo: e.target.value
        })
    }

    handleClick = () => {
        var url = 'http://jsonplaceholder.typicode.com/users';
        Axios.post(url, { name: 'salix', email: 'asd@asd.com'})
        .then(resp => {
            this.props.history.push('/customer-list/11');
        })

        // this.props.history.push('/customer-list/' + this.state.clientNo);
    }

    render() {
        return (
            <div>
                <label>
                    Müşteri No:
                </label>

                <input
                    type='text'
                    value={ this.state.clientNo }
                    onChange={ this.onChange }
                />

                <button onClick={ this.handleClick }>Kaydet</button>
            </div>
        )
    }
}

export default withRouter(Form);
