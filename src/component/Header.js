import React from 'react';
import { NavLink} from 'react-router-dom';


const Header=()=>(
    <div>
        <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);
export default Header