import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import CustomLayout from './layout/CustomLayout';

import  { Provider } from 'react-redux';
import store from '../store';
import Dashboard from './tasks/Dashboard';

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                    <CustomLayout>
                        <Fragment>
                        <Dashboard />
                        </Fragment>
                    </CustomLayout>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
