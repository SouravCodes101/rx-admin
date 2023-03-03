import React from "react";
import Container from 'rsuite/Container';
import Header from "../../../components/common/header";
import utility from "../../../util/utility";
import Router from "next/router";
import Footer from "../../../components/common/footer";
import ViewVendorCmp from "../../../components/vendors/settings/viewVendor";

class ViewVendor extends React.Component {
    static async getInitialProps({query}) {
        let vendorId=query.vendorId;
        return {vendorId:vendorId};
    }
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
                    <ViewVendorCmp vendorId={this.props.vendorId}/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default ViewVendor;