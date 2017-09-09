import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

//todo figure out how to call the action->reducer to get the data
//todo write function to render each link
//todo probably create new link omponent for each person
//todo probably use the Link class below along with the react-router

const Sidebar = (props) => {

    const activeStyle = { color: 'blue' };

    const renderedNavItems = props.navItems.map((navItem, i) => {
        return (
            <li key={i}>
                <NavLink exact to={"/person/" + navItem.id} activeStyle={activeStyle}>
                    {navItem.name}
                </NavLink>
            </li>
        );
    });

    return (
        <div>
            <h4>People</h4>
            <ul className="sidebar-list">
                {renderedNavItems}
            </ul>
        </div>
    );
};

Sidebar.propTypes = {
    navItems: PropTypes.array.isRequired
};

export default Sidebar;
