import React from "react";
import Container from 'rsuite/Container';
import Header from "../../../components/common/header";
import utility from "../../../util/utility";
import Router from "next/router";
import OnLineCustomerProfileCmp from "../../../components/customers/onLineCustomerProfileCmp";
import Footer from "../../../components/common/footer";

class Profile extends React.Component {
    async componentDidMount() {
        let session=await utility.fetchSession();
        if(session===false){
            Router.push("/");
            return false;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Header/>
                    <OnLineCustomerProfileCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default Profile;