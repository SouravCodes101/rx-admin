import React from "react";
import Container from 'rsuite/Container';
import LoginCmp from "../components/account/login";
import Footer from "../components/common/footer";

class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <LoginCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default Login;




