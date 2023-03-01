import React from 'react';
import {FlexboxGrid, Breadcrumb, Table, Loader,Button} from 'rsuite';
import Link from 'next/link'
import CustomerService from "../../../services/customerService";
import {toast} from "react-toastify";
import CommonSideNavCmp from "./commonSideNavCmp";

const {Column, HeaderCell, Cell} = Table;

class AddressesCmp extends React.Component {
    async componentDidMount() {
        const url = new URL(window.location.href);
        let id = url.searchParams.get("customerId");
        let respObj=await CustomerService.fetchCustomerAddress(id);
        if(respObj===false){
            toast.error(process.env.ERROR_MSG);
            this.setState({isLoading: false});
        }else {
            this.setState({isLoading: false, addresses: respObj, customerId: id});
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            addresses:[],
            isLoading: true,
            customerId:null
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Users</Breadcrumb.Item>
                        <Breadcrumb.Item>Customers</Breadcrumb.Item>
                        <Breadcrumb.Item><Link href={"/customers/online/list?page=1"}>Online Customers</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Address</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonSideNavCmp customerId={this.state.customerId} activeKey={"2"}/>
                        </FlexboxGrid.Item>
                        {this.state.isLoading === false &&
                        <FlexboxGrid.Item colspan={19}>
                            <Table
                                height={500}
                                data={this.state.addresses}
                                onRowClick={rowData => {
                                    console.log(rowData);
                                }}
                            >
                                <Column width={200} align="left" fixed>
                                    <HeaderCell>Name</HeaderCell>
                                    <Cell dataKey="name"/>
                                </Column>
                                <Column width={200} align="left" fullText>
                                    <HeaderCell>Address Line 1</HeaderCell>
                                    <Cell dataKey="addressLine1"/>
                                </Column>
                                <Column width={200} align="left" fullText>
                                    <HeaderCell>Address Line 2</HeaderCell>
                                    <Cell dataKey="addressLine2"/>
                                </Column>
                                <Column width={150} align="left" fullText>
                                    <HeaderCell>City</HeaderCell>
                                    <Cell dataKey="city"/>
                                </Column>
                                <Column width={70} align="left">
                                    <HeaderCell>Pin Code</HeaderCell>
                                    <Cell dataKey="pinCode"/>
                                </Column>
                                <Column width={150} align="left" fullText>
                                    <HeaderCell>State</HeaderCell>
                                    <Cell dataKey="state"/>
                                </Column>
                                <Column width={70} align="left">
                                    <HeaderCell>Country</HeaderCell>
                                    <Cell dataKey="country"/>
                                </Column>
                                <Column width={120} align="left">
                                    <HeaderCell>Phone</HeaderCell>
                                    <Cell dataKey="phone"/>
                                </Column>
                                <Column width={80} align="left">
                                    <HeaderCell>Is Default</HeaderCell>
                                    <Cell>{rowData => rowData.isDefault===true?"Yes":"No"}</Cell>
                                </Column>
                                <Column width={80} fixed="right">
                                    <HeaderCell>...</HeaderCell>
                                    <Cell style={{padding: '6px'}}>
                                        {rowData => (
                                            <Button appearance="link">
                                                View
                                            </Button>
                                        )}
                                    </Cell>
                                </Column>
                            </Table>
                        </FlexboxGrid.Item>
                        }
                    </FlexboxGrid>
                    {this.state.isLoading === true &&
                    <div>
                        <Loader center size={"md"} content="loading"/>
                    </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default AddressesCmp;




