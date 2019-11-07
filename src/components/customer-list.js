import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';

class CustomerList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        var customerNo = this.props.match.params.customerNo;
        
        var url = `http://jsonplaceholder.typicode.com/users${!_.isEmpty(customerNo) ? '?id=' + customerNo : ''}`;

        Axios.get(url)
        .then(results => {
            this.setState({
                dataList: results.data
            })
        })
    }

    render() {
        if(_.isEmpty(this.state.dataList)) {
            return <div>Loading...</div>
        }
        return (
            <div>
                Customer List
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        _.map(this.state.dataList, data => {
                            return (
                                <tr key={ data.id }>
                                    <td>{ data.id }</td>
                                    <td>{ data.name }</td>
                                    <td>{ data.email }</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomerList;