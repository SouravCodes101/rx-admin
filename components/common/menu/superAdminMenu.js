import React from 'react';
import Navbar from 'rsuite/Navbar';
import Nav from 'rsuite/Nav';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import Image from 'next/image'
import Router from 'next/router'

class SuperAdminMenu extends React.Component {
    redirect=(menuPart)=>{
        Router.push(menuPart);
    }
    render() {
        return (
            <React.Fragment>
                        <Nav>
                            <Nav.Item icon={<HomeIcon/>}>Home</Nav.Item>
                            <Nav.Menu title="Reports">
                                <Nav.Item>Credit Report</Nav.Item>
                            </Nav.Menu>
                            <Nav.Item onClick={()=>{this.redirect("/tasks/taskList")}}>Tasks</Nav.Item>
                            <Nav.Menu title="Users">
                                <Nav.Item onClick={()=>{this.redirect("/customers/online/list?page=1")}}>Customers</Nav.Item>
                                <Nav.Item>Staff</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu title="Settings">
                                <Nav.Item onClick={()=>{this.redirect("/settings/contactDetails")}}>Contact Details</Nav.Item>
                                <Nav.Item onClick={()=>{this.redirect("/settings/shippingDetails")}}>Shipping Details</Nav.Item>
                                <Nav.Item onClick={()=>{this.redirect("/settings/pinCode")}}>Pincode</Nav.Item>
                            </Nav.Menu>
                            <Nav.Item onClick={()=>{this.redirect("/vendors/list?page=1")}}>Vendors</Nav.Item>
                        </Nav>
                        <Nav pullRight>
                            <Nav.Item icon={<CogIcon/>}>Account</Nav.Item>
                        </Nav>
            </React.Fragment>
        )
    }
}

export default SuperAdminMenu;




