import React from 'react';
import {
    FlexboxGrid,
    Breadcrumb,
    Button,
    Form,
    Grid,
    Row,
    Col,
    Checkbox
} from 'rsuite';
import Link from 'next/link'
import {toast} from "react-toastify";
import VendorService from "../../../services/vendorService";
import Router from "next/router";
import utility from "../../../util/utility";

class AddUserCmp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            phone:"",
            addressLine1:"",
            addressLine2:"",
            area:"",
            pinCode:"",
            city:"",
            state:"",
            country:"",
            landmark:"",
            isLoading: false,
            isActive:true,
            password:""
        }
    }
    saveOrg=async ()=>{
        //validations
        if(this.state.name===""){
            toast.error("Please add organisation name.");
            return false;
        }
        if(utility.validateEmail(this.state.email)===false){
            toast.error("Please add valid E-mail.");
            return false;
        }
        if(utility.checkPhone(this.state.phone)===false){
            toast.error("Please add valid phone no.");
            return false;
        }
        if(this.state.addressLine1===""){
            toast.error("Please add address line 1.");
            return false;
        }
        if(this.state.pinCode===""){
            toast.error("Please add valid pin code.");
            return false;
        }
        if(this.state.city===""){
            toast.error("Please add city.");
            return false;
        }
        if(this.state.state===""){
            toast.error("Please add state.");
            return false;
        }
        if(this.state.country===""){
            toast.error("Please add country.");
            return false;
        }
        let payload={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            addressLine1:this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            pinCode: this.state.pinCode,
            city:this.state.city,
            state:this.state.state,
            country:this.state.country,
            area: this.state.area,
            landmark:this.state.landmark,
            isActive:this.state.isActive
        };
        this.setState({isLoading:true});
        let respObj=await VendorService.addVendor(payload);
        this.setState({isLoading:false});
        if(respObj===false) {
            toast.error(process.env.ERROR_MSG);
        }else {
            Router.push("/vendors/list?page=1");
        }
    }
    handleActive=(e)=>{
        if(e===true){
            this.setState({isActive:false});
        }else{
            this.setState({isActive:true});
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Vendors</Breadcrumb.Item>
                        <Breadcrumb.Item><Link href="/vendors/list?page=1">Vendor List</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Vendor</Breadcrumb.Item>
                        <Breadcrumb.Item><Link href="/vendors/list?page=1">User List</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Add User</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            {/*<CommonMenuCmp/>*/}
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={19}>
                            <Form>
                                <Grid fluid>
                                    <Row gutter={16}>
                                        <Col xs={8}>
                                            <Form.Group controlId="name" className={"margin-btn"}>
                                                <Form.ControlLabel>Name *</Form.ControlLabel>
                                                <Form.Control name="name" value={this.state.name} onChange={(e)=>{this.setState({name:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="email" className={"margin-btn"}>
                                                <Form.ControlLabel>E-mail *</Form.ControlLabel>
                                                <Form.Control name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={8}>
                                            <Form.Group controlId="password" className={"margin-btn"}>
                                                <Form.ControlLabel>Password *</Form.ControlLabel>
                                                <Form.Control name="password" value={this.state.password} onChange={(e)=>{this.setState({password:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            {/*<Form.Group controlId="email" className={"margin-btn"}>*/}
                                            {/*    <Form.ControlLabel>E-mail *</Form.ControlLabel>*/}
                                            {/*    <Form.Control name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e})}} maxLength={255}/>*/}
                                            {/*</Form.Group>*/}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="phone" className={"margin-btn"}>
                                                <Form.ControlLabel>Phone *</Form.ControlLabel>
                                                <Form.Control name="phone" value={this.state.phone} onChange={(e)=>{this.setState({phone:e})}} maxLength={10}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="addressLine1" className={"margin-btn"}>
                                                <Form.ControlLabel>Address Line1 *</Form.ControlLabel>
                                                <Form.Control name="addressLine1" value={this.state.addressLine1} onChange={(e)=>{this.setState({addressLine1:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="addressLine2" className={"margin-btn"}>
                                                <Form.ControlLabel>Address Line2</Form.ControlLabel>
                                                <Form.Control name="addressLine2" value={this.state.addressLine2} onChange={(e)=>{this.setState({addressLine2:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="area" className={"margin-btn"}>
                                                <Form.ControlLabel>Area</Form.ControlLabel>
                                                <Form.Control name="area" value={this.state.area} onChange={(e)=>{this.setState({area:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="pinCode" className={"margin-btn"}>
                                                <Form.ControlLabel>Pin Code *</Form.ControlLabel>
                                                <Form.Control name="pinCode" value={this.state.pinCode} onChange={(e)=>{this.setState({pinCode:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="landmark" className={"margin-btn"}>
                                                <Form.ControlLabel>Landmark</Form.ControlLabel>
                                                <Form.Control name="landmark" value={this.state.landmark} onChange={(e)=>{this.setState({landmark:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="city" className={"margin-btn"}>
                                                <Form.ControlLabel>City *</Form.ControlLabel>
                                                <Form.Control name="city" value={this.state.city} onChange={(e)=>{this.setState({city:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="state" className={"margin-btn"}>
                                                <Form.ControlLabel>State *</Form.ControlLabel>
                                                <Form.Control name="state" value={this.state.state} onChange={(e)=>{this.setState({state:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="country" className={"margin-btn"}>
                                                <Form.ControlLabel>Country *</Form.ControlLabel>
                                                <Form.Control name="country" value={this.state.country} onChange={(e)=>{this.setState({country:e})}} maxLength={255}/>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Group controlId="isActive" className={"margin-btn"}>
                                                <Form.ControlLabel></Form.ControlLabel>
                                                <Checkbox value={this.state.isActive} checked={this.state.isActive} onChange={this.handleActive}>Active</Checkbox>
                                            </Form.Group>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Group controlId="addAddress" className={"margin-btn"}>
                                                <Button appearance="primary" onClick={this.saveOrg} disabled={this.state.isLoading}>Save</Button>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={8}>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Form>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </React.Fragment>
        )
    }
}

export default AddUserCmp;