import React from "react";
import Container from 'rsuite/Container';
import Header from "../../../components/common/header";
import utility from "../../../util/utility";
import Router from "next/router";
import Footer from "../../../components/common/footer";
import UserListCmp from "../../../components/vendors/settings/userListCmp";

class UserList extends React.Component {
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
                   <UserListCmp vendorId={this.props.vendorId}/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default UserList;