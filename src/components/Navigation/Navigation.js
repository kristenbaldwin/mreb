import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Sidenav, Toggle, Nav, Dropdown, Icon } from 'rsuite';
import Home from '../Home/Home';
import 'rsuite/styles/index.less';
import './Navigation.css';

const NoMatch = ({ location }) => (
    <div>
        <h3>Page not found: {location.pathname}</h3>
    </div>
);

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: '1',
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        const { expanded } = this.state;
        return (
            <Router>
                <div className="sidenav-wrapper">
                    <Sidenav expanded={expanded} appearance="inverse"
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}>
                        <Sidenav.Body>
                            <Toggle onChange={this.handleToggle} checked={expanded} />
                            <hr />
                            <Nav>
                                <Nav.Item componentClass={NavLink} to="/" eventKey="1" activeClassName="rs-nav-item-active" icon={<Icon icon="dashboard" />}>
                                    Dashboard
                                </Nav.Item>
                                <Nav.Item componentClass={NavLink} to="/agents" eventKey="2" activeClassName="rs-nav-item-active" icon={<Icon icon="group" />}>
                                    Agents
                                </Nav.Item>
                                <Dropdown placement="rightTop" eventKey="3" title="Advanced" icon={<Icon icon="magic" />}>
                                    <Dropdown.Item componentClass={NavLink} to="/geo" eventKey="3-1" activeClassName="rs-dropdown-item-active">Geo</Dropdown.Item>
                                    <Dropdown.Item componentClass={NavLink} to="/devices" eventKey="3-2" activeClassName="rs-dropdown-item-active">Devices</Dropdown.Item>
                                </Dropdown>
                                <Dropdown eventKey="4" title="Settings" icon={<Icon icon="gear-circle" />}>
                                    <Dropdown.Item componentClass={NavLink} to="/applications" eventKey="4-1" activeClassName="rs-dropdown-item-active">Applications</Dropdown.Item>
                                    <Dropdown.Item componentClass={NavLink} to="/channels" eventKey="4-2" activeClassName="rs-dropdown-item-active">Channels</Dropdown.Item>
                                </Dropdown>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Navigation;