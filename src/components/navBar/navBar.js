import React from 'react';
import './navBar.css'
import NavBarButtons from '../navBarButtons/navBarButtons';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="navbar">
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About Us" />
            </div>
        )
    }
}

export default NavBar;