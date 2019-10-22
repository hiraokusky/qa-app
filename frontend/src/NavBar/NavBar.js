import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth0Client from '../Auth';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut = () => {
        auth0Client.signOut();
        this.forceUpdate();
        // this.props.history.replace('/');
    };

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary fixed-top">
                <Link className="navbar-brand" to="/">
                    Q&App
      </Link>
                {
                    !auth0Client.isAuthenticated() &&
                    <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
                }
                {
                    auth0Client.isAuthenticated() &&
                    <div>
                        <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                        <button className="btn btn-dark" onClick={() => { this.signOut() }}>Sign Out</button>
                    </div>
                }
            </nav>
        );
    }
}

export default NavBar;