import React from 'react';
import {
    FlexboxGrid,
    Breadcrumb,
    Loader,
    Button,
    Form,
    TagInput
} from 'rsuite';
import Link from 'next/link'
import Router from 'next/router'
import { toast } from 'react-toastify';
import SettingsService from "../../services/settingsService";
import utility from "../../util/utility";

class ContactDetailsCmp extends React.Component {
    async componentDidMount() {
        let respObj=await SettingsService.fetchContactDetails();
        if(respObj === false || respObj===null){
            this.setState({isLoading:false});
            toast.error(process.env.ERROR_MSG);
        }else{
            this.setState({isLoading:false,contactDetails:respObj,application:respObj.application,supportEmail:respObj.supportEmail,supportWhatsApp:respObj.supportWhatsApp,supportPhone:respObj.supportPhone});
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            contactDetails:{},
            application:"",
            supportEmail:"",
            supportPhone:[],
            supportWhatsApp:""
        }
    }
    navigateMain=(url)=>{
        Router.push(url);
    }
    updateContactDetails=async()=>{
        //validations
        if(this.state.application===""){
            toast.error("Please enter valid application name.");
            return false;
        }
        if(this.state.supportEmail==="" || utility.validateEmail(this.state.supportEmail)===false){
            toast.error("Please enter valid email address.");
            return false;
        }
        if(this.state.supportWhatsApp==="" || utility.checkPhone(this.state.supportWhatsApp)===false){
            toast.error("Please enter phone no.");
            return false;
        }
        if(this.state.supportPhone.length===0){
            toast.error("Please at least one support phone number.");
            return false;
        }
        let payload={
            id :this.state.contactDetails._id,
            application : this.state.application,
            supportEmail : this.state.supportEmail,
            supportPhone : this.state.supportPhone,
            supportWhatsApp : this.state.supportWhatsApp
        }
        this.setState({isLoading:true});
        let respObj=await SettingsService.updateContactDetails(payload);
        if(respObj === false){
            toast.error(process.env.ERROR_MSG);
        }else{
            let respObj=await SettingsService.fetchContactDetails();
            if(respObj === false){
                toast.error(process.env.ERROR_MSG);
            }else{
                this.setState({isLoading:false,contactDetails:respObj,application:respObj.application,supportEmail:respObj.supportEmail,supportWhatsApp:respObj.supportWhatsApp,supportPhone:respObj.supportPhone});
            }
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Settings</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact Details</Breadcrumb.Item>
                    </Breadcrumb>
                    <FlexboxGrid justify="center">
                        {this.state.isLoading === false &&
                            <FlexboxGrid.Item colspan={10}>
                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.ControlLabel>Application Name</Form.ControlLabel>
                                        <Form.Control name="name" value={this.state.application} onChange={(e)=>{this.setState({application:e})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="supportEmail">
                                        <Form.ControlLabel>Support Email</Form.ControlLabel>
                                        <Form.Control name="supportEmail" value={this.state.supportEmail} onChange={(e)=>{this.setState({supportEmail:e})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="supportWhatsApp">
                                        <Form.ControlLabel>Support WhatsApp</Form.ControlLabel>
                                        <Form.Control name="supportWhatsApp" value={this.state.supportWhatsApp} onChange={(e)=>{this.setState({supportWhatsApp:e})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="supportPhone">
                                        <Form.ControlLabel>Support WhatsApp</Form.ControlLabel>
                                        <TagInput style={{ width: 300 }} defaultValue={this.state.supportPhone} onChange={(e)=>{this.setState({supportPhone:e})}}/>
                                    </Form.Group>
                                    <Form.Group controlId="supportPhone">
                                        <Button appearance="primary" onClick={this.updateContactDetails}>Update</Button>
                                    </Form.Group>
                                </Form>
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

export default ContactDetailsCmp;




