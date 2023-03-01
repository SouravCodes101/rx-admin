import React from 'react';
import {Nav, Sidenav} from "rsuite";
import Router from "next/router";
import DetailIcon from '@rsuite/icons/Detail';
import SentToUserIcon from '@rsuite/icons/SentToUser';
import ParagraphIcon from '@rsuite/icons/Paragraph';
import PageIcon from '@rsuite/icons/Page';
import ProjectIcon from '@rsuite/icons/Project';
import ArowBackIcon from '@rsuite/icons/ArowBack';

class CommonSideNavCmp extends React.Component {
    navigate=(url)=>{
        Router.push(url+this.props.customerId);
    }
    navigateBack=(url)=>{
        Router.push(url);
    }
    render() {
        return (
            <React.Fragment>
                <div style={{width: 240}}>
                    <Sidenav defaultOpenKeys={['3', '4']}>
                        <Sidenav.Body>
                            <Nav activeKey={this.props.activeKey}>
                                <Nav.Item eventKey="6" icon={<ArowBackIcon/>} onClick={()=>{this.navigateBack("/customers/online/list?page=1")}}>
                                   Customer Listing
                                </Nav.Item>
                                <Nav.Item eventKey="1" icon={<DetailIcon/>} onClick={()=>{this.navigate("/customers/online/profile?customerId=")}}>
                                    Profile
                                </Nav.Item>
                                <Nav.Item eventKey="2" icon={<SentToUserIcon/>} onClick={()=>{this.navigate("/customers/online/address?customerId=")}}>
                                    Addresses
                                </Nav.Item>
                                <Nav.Item eventKey="3" icon={<ParagraphIcon/>} onClick={()=>{this.navigate("/customers/online/onlineOrders?page=1&customerId=")}}>
                                    Online Orders
                                </Nav.Item>
                                <Nav.Item eventKey="4" icon={<PageIcon/>} onClick={()=>{this.navigate("/customers/online/storeOrders?page=1&customerId=")}}>
                                    Store Orders
                                </Nav.Item>
                                <Nav.Item eventKey="5" icon={<ProjectIcon/>} onClick={()=>{this.navigate("/customers/online/purchaseAnalysis?page=1&customerId=")}}>
                                    Purchase Insights
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
            </React.Fragment>
        )
    }
}

export default CommonSideNavCmp;




