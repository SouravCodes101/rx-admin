import React from "react";
import Container from 'rsuite/Container';
import Header from "../../components/common/header";
import TaskListCmp from "../../components/tasks/taskListCmp";
import utility from "../../util/utility";
import Router from "next/router";
import Footer from "../../components/common/footer";

class TaskList extends React.Component {
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
                    <TaskListCmp/>
                </Container>
                <Container className={"footer"}>
                    <Footer/>
                </Container>
            </React.Fragment>
        )
    }
}
export default TaskList;