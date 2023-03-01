import React from 'react';
import {
    Container,
    Header,
    Content,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid,
    Modal
} from 'rsuite';
import Image from "next/image";
import LoginService from "../../services/loginService";
import utility from "../../util/utility";
import Router from 'next/router'


class LoginCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg:null,
            modalStatus:false,
            modalMsg:"",
            apiCallInProgress:false
        }
    }
    doLogin=async ()=>{
        //validations
        this.setState({errorMsg:null,modalStatus:false});
        if(this.state.username.trim()===""){
            this.setState({errorMsg:"Please enter valid username."});
            return false;
        }
        if(this.state.password.trim()===""){
            this.setState({errorMsg:"Please enter valid password."});
            return false;
        }
        this.setState({apiCallInProgress:true});
        let loginData=await LoginService.login(this.state.username,this.state.password);
        this.setState({apiCallInProgress:false});
        //remove session
        await utility.removeSession();

        if(loginData.status===false){
            if(loginData.data.code==="ACC-1003"){
                this.setState({modalStatus:true,modalMsg:"Please enter valid password."});
            }
            else if(loginData.data.code==="ACC-1005"){
                this.setState({modalStatus:true,modalMsg:"Please enter valid user name."});
            }
        }else if(loginData.status===true) {
            utility.saveSession(loginData.data);
            Router.push("/dashboard");
        }
    }
    handleClose=()=>{
        this.setState({modalStatus:false});
    }
    render() {
        return (
            <React.Fragment>
                <div className="show-fake-browser login-page">
                    <Container>
                        <Header>
                            <Navbar appearance="inverse">
                                <Navbar.Brand>
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={30}
                                        height={30}
                                    />
                                </Navbar.Brand>
                            </Navbar>
                        </Header>
                        <Content>
                            <FlexboxGrid justify="center">
                                <FlexboxGrid.Item colspan={12}>
                                    {this.state.errorMsg !== null &&
                                        <Message showIcon type="error">
                                            {this.state.errorMsg}
                                        </Message>
                                    }
                                    <Panel header={<h3>Login</h3>} bordered>
                                        <Form fluid>
                                            <Form.Group>
                                                <Form.ControlLabel>Username</Form.ControlLabel>
                                                <Form.Control name="name" value={this.username} onChange={(e) => {
                                                    this.setState({username: e})
                                                }} maxLength={50}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.ControlLabel>Password</Form.ControlLabel>
                                                <Form.Control name="password" type="password" autoComplete="off"
                                                              value={this.password} onChange={(e) => {
                                                    this.setState({password: e})
                                                }} maxLength={50}/>
                                            </Form.Group>
                                            <Form.Group>
                                                <ButtonToolbar>
                                                    <Button appearance="primary" onClick={this.doLogin} disabled={this.state.apiCallInProgress}>Sign in</Button>
                                                    <Button appearance="link">Forgot password?</Button>
                                                </ButtonToolbar>
                                            </Form.Group>
                                        </Form>
                                    </Panel>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </Content>
                    </Container>
                </div>
                <Modal open={this.state.modalStatus} onClose={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.modalMsg}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose} appearance="primary">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}
export default LoginCmp;




