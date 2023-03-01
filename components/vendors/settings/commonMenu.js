import React from 'react';
import {Nav, Sidenav} from "rsuite";
import Router from "next/router";
import DetailIcon from '@rsuite/icons/Detail';
import SentToUserIcon from '@rsuite/icons/SentToUser';
import ParagraphIcon from '@rsuite/icons/Paragraph';
import PageIcon from '@rsuite/icons/Page';
import ProjectIcon from '@rsuite/icons/Project';
import ArowBackIcon from '@rsuite/icons/ArowBack';

class CommonMenuCmp extends React.Component {
    navigate=(url)=>{
        Router.push(url+this.props.customerId);
    }
    navigateView=(selectedData)=>{
        let url = "/vendors/" + this.props.vendorId + "/viewVendor";
        Router.push('/vendors/[vendorId]/viewVendor', url);
    }
    navigateUserList=()=>{
        let url = "/vendors/" + this.props.vendorId + "/userList";
        Router.push('/vendors/[vendorId]/userList', url);
    }
    render() {
        return (
            <React.Fragment>
                <div style={{width: 240}}>
                    <Sidenav>
                        <Sidenav.Body>
                            <Nav activeKey={this.props.activeKey}>
                                <Nav.Item eventKey="1" icon={<DetailIcon/>} onClick={()=>{this.navigateView()}}>
                                    View/Edit Vendor
                                </Nav.Item>
                                <Nav.Item eventKey="2" icon={<DetailIcon/>} onClick={()=>{this.navigateUserList()}}>
                                    User List
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
            </React.Fragment>
        )
    }
}

export default CommonMenuCmp;




