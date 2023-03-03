import React from 'react';
import {FlexboxGrid, Breadcrumb,Table} from 'rsuite';
import Link from 'next/link'
import TasksService from "../../services/tasksService";
import Router from 'next/router'
import moment from 'moment'

const { Column, HeaderCell, Cell } = Table;

class TaskListCmp extends React.Component {
    async componentDidMount() {
        let respObj=await TasksService.fetchTaskList(1);
        this.setState({tasks:respObj.data,currentPage:respObj.currentPage,totalPages:respObj.totalPages,totalRecords:respObj.totalRecords});
    }

    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
            currentPage:1,
            totalPages:0,
            totalRecords:0
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Task List</Breadcrumb.Item>
                    </Breadcrumb>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item colspan={24}>
                            <Table
                                height={700}
                                data={this.state.tasks}
                                onRowClick={rowData => {
                                    console.log(rowData);
                                }}
                            >
                                <Column width={150} align="center" fixed>
                                    <HeaderCell>Type</HeaderCell>
                                    <Cell dataKey="description" />
                                </Column>
                                <Column width={150} align="center" fixed>
                                    <HeaderCell>Created By</HeaderCell>
                                    <Cell dataKey="createdBy" />
                                </Column>
                                <Column width={150} align="center" fixed>
                                    <HeaderCell>Created At</HeaderCell>
                                    <Cell>{rowData => moment(rowData.createdAt).format("DD-MM-YYYY")}</Cell>
                                </Column>
                            </Table>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </React.Fragment>
        )
    }
}
export default TaskListCmp;




