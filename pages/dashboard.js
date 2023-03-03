import React from "react";
import Container from 'rsuite/Container';
import Header from "../components/common/header";
import DashboardCmp from "../components/dashboardCmp";
import Footer from "../components/common/footer";

class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                   <Header/>
                    <DashboardCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default Dashboard;