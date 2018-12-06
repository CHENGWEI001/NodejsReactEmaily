import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

/*
 <Route exact path="/" component={Landing} />
 is equal to 
 <Route exact={true} path="/" component={Landing} />
*/

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header component={Header}/>   
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />                    
                        <Route path="/surveys/new" component={SurveyNew} />                    
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

// before making to class base
// const App = () => {
//     return (
//         <div className="container">
//             <BrowserRouter>
//                 <div>
//                     <Header component={Header}/>   
//                     <Route exact path="/" component={Landing} />
//                     <Route exact path="/surveys" component={Dashboard} />                    
//                     <Route path="/surveys/new" component={SurveyNew} />                    
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

//https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7605102?start=172
export default connect(null, actions)(App);