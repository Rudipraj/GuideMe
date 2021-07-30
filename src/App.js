import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/pages/signin/Login'
import Navbars from './components/Navbars';
import Signup from './components/pages/signin/Signup'
import Aboutus from './components/pages/Aboutus'
import TopDestination from './components/pages/Topdestination'
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services'
import 'antd/dist/antd.css';
import firebase from "firebase";
import {firebaseConfig} from "./config";
import Dashboard from "./components/pages/admin/dashboard/dashboard";
import GuideDetail from "./components/guide/guideDetail";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLogin: !!JSON.parse(localStorage.getItem('userData')) || false,
            userInfo: JSON.parse(localStorage.getItem('userData')) || {},
            isAdmin: false,
        }
    }

    componentDidMount() {
        this.initializeFirebase();
        if (this.state.isLogin) {
            this.setState({isAdmin: this.isAdmin(this.state.userInfo.email)})
        }
    }

    initializeFirebase = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }
        // let dbUsers=[];
        // database.collection('users').get().then((res)=>
        // {
        //     res.forEach(res=>{
        //         console.log(res.data())
        //         dbUsers.push(res.data())
        //     })
        //    this.setState({users:dbUsers})
        //
        // })
        firebase.analytics();

    }
    isAdmin = (email) => {
        let admins = ['sudhirbhattarai2@gmail.com', 'rihdusbhattarai71@gmail.com', 'sudhirbhattarai71@gmail.com']
        return admins.includes(email);
    }

    render() {
        let {isAdmin} = this.state;
        return (
            <Router>
                <Navbars/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/aboutus' component={Aboutus}/>
                    <Route path='/sign-up' component={Login}/>
                    <Route path='/sign-in' component={Signup}/>
                    <Route path='/guides/:guideId' component={GuideDetail}/>
                    <Route path='/destinations' component={TopDestination}/>
                    {/*{isAdmin?<Route path={'/dashboard'} component={Dashboard}/>:'' }*/}
                    <Route path={'/dashboard'} component={Dashboard}/>
                </Switch>
                <Footer/>
            </Router>

        );
    }
}

export default App;
