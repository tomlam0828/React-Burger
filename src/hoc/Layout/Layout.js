import React, { useState } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const layout = props => {
    const [sideDrawer, setSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawer(false)
    }

    const sideDrawerToggleHandler = () => {
       setSideDrawer(!sideDrawer);
    }
        return (
            <Aux>
                <Toolbar 
                drawerToggleClicked={sideDrawerToggleHandler}
                isAuth={props.isAuthenticated}
                />
                <SideDrawer
                    open={sideDrawer} 
                    closed={sideDrawerClosedHandler} 
                    isAuth={props.isAuthenticated}
                    />
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.content}>
                    {props.children}
                </main>
            </Aux>
        )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);