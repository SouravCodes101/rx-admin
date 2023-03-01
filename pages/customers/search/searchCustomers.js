import React from "react";
import Container from 'rsuite/Container';
import Header from "../../../components/common/header";
import utility from "../../../util/utility";
import Router from "next/router";
import Footer from "../../../components/common/footer";
import SearchCustomerCmp from "../../../components/customers/search/searchCustomerCmp";

class StoreOrders extends React.Component {
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
                    <SearchCustomerCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default StoreOrders;