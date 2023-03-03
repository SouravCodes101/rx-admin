import React from "react";
import Container from 'rsuite/Container';
import Header from "../../components/common/header";
import utility from "../../util/utility";
import Router from "next/router";
import Footer from "../../components/common/footer";
import ContactDetailsCmp from "../../components/settings/contactDetailsCmp";

class ContactDetails extends React.Component {
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
                    <ContactDetailsCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default ContactDetails;