import React from 'react';
import {FlexboxGrid, Breadcrumb, Loader, Form,InputGroup} from 'rsuite';
import Link from 'next/link'
import CustomerService from "../../services/customerService";
import moment from "moment";
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { toast } from 'react-toastify';
import CommonSideNavCmp from "./online/commonSideNavCmp";

class OnLineCustomerProfileCmp extends React.Component {
    async componentDidMount() {
        const url = new URL(window.location.href);
        let id = url.searchParams.get("customerId");
        let respObj=await CustomerService.fetchCustomerProfile(id);
        if(respObj===false){
            toast.error(process.env.ERROR_MSG);
            this.setState({isLoading: false});
        }else {
            this.setState({isLoading: false, customerProfile: respObj, customerId: id});
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            customerProfile: null,
            customerId:null
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Users</Breadcrumb.Item>
                        <Breadcrumb.Item>Customers</Breadcrumb.Item>
                        <Breadcrumb.Item><Link href={"/customers/online/list?page=1"}>Online Customers</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonSideNavCmp customerId={this.state.customerId} activeKey={"1"}/>
                        </FlexboxGrid.Item>
                        {this.state.isLoading === false &&
                        <FlexboxGrid.Item colspan={19}>
                            <FlexboxGrid>
                                <FlexboxGrid.Item colspan={10}>
                                    <Form>
                                        <Form.Group controlId="name">
                                            <Form.ControlLabel>Name</Form.ControlLabel>
                                            <Form.Control name="name" value={this.state.customerProfile.name}/>
                                        </Form.Group>
                                        <Form.Group controlId="customerCode">
                                            <Form.ControlLabel>Customer Code</Form.ControlLabel>
                                            <Form.Control name="name" value={this.state.customerProfile.customerCode}/>
                                        </Form.Group>
                                        <Form.Group controlId={'input-1'}>
                                            <Form.ControlLabel>Phone</Form.ControlLabel>
                                            <InputGroup inside>
                                                <Form.Control
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={this.state.customerProfile.phone}
                                                />
                                                <InputGroup.Addon>
                                                    {this.state.customerProfile.isVerified === true &&
                                                    <CheckIcon color={"green"}/>
                                                    }
                                                    {this.state.customerProfile.isVerified === false &&
                                                    <CloseIcon color={"red"}/>
                                                    }
                                                </InputGroup.Addon>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group controlId="email">
                                            <Form.ControlLabel>Email</Form.ControlLabel>
                                            <Form.Control name="name" value={this.state.customerProfile.email}/>
                                        </Form.Group>
                                        <Form.Group controlId="memberSince">
                                            <Form.ControlLabel>Member Since (DD-MM-YYYY)</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={moment(this.state.customerProfile.createdAt).format("DD-MM-YYYY")}/>
                                        </Form.Group>
                                        <Form.Group controlId="dateOfBirth">
                                            <Form.ControlLabel>Date of Birth (DD-MM-YYYY)</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.profile.dob !== null ? moment(this.state.customerProfile.profile.dob).format("DD-MM-YYYY") : ""}/>
                                        </Form.Group>
                                    </Form>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={12}>
                                    <Form>
                                        <Form.Group controlId="gender">
                                            <Form.ControlLabel>Gender</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.profile.gender}/>
                                        </Form.Group>
                                        <Form.Group controlId="weight">
                                            <Form.ControlLabel>Weight</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.profile.weight}/>
                                        </Form.Group>
                                        <Form.Group controlId="legacy">
                                            <Form.ControlLabel>Legacy user?</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.legacy !== "" ? (this.state.customerProfile.legacy === "Y" ? "Yes" : "No") : "No"}/>
                                        </Form.Group>
                                        <Form.Group controlId="device">
                                            <Form.ControlLabel>Device</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.registrationMetaData.device}/>
                                        </Form.Group>
                                        <Form.Group controlId="ip">
                                            <Form.ControlLabel>IP</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.registrationMetaData.ip}/>
                                        </Form.Group>
                                        <Form.Group controlId="agent">
                                            <Form.ControlLabel>User Agent</Form.ControlLabel>
                                            <Form.Control name="name"
                                                          value={this.state.customerProfile.registrationMetaData.userAgent}/>
                                        </Form.Group>
                                    </Form>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </FlexboxGrid.Item>
                        }
                    </FlexboxGrid>
                    {this.state.isLoading === true &&
                    <div>
                        <Loader center size={"md"} content="loading"/>
                    </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default OnLineCustomerProfileCmp;




