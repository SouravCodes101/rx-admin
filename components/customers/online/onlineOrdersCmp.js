import React from 'react';
import {FlexboxGrid, Breadcrumb, Table, Loader, Button, Pagination} from 'rsuite';
import Link from 'next/link'
import CustomerService from "../../../services/customerService";
import Router from 'next/router'
import CommonSideNavCmp from "./commonSideNavCmp";
import {toast} from "react-toastify";
import moment from "moment";

const {Column, HeaderCell, Cell} = Table;

class OnlineOrdersCmp extends React.Component {
    async componentDidMount() {
        const url = new URL(window.location.href);
        let id = url.searchParams.get("customerId");
        let page=url.searchParams.get("page");
        await this.fetchData(id,page);
    }
    componentWillReceiveProps(newProps){
        const url = new URL(window.location.href);
        let id = url.searchParams.get("customerId");
        let page=url.searchParams.get("page");
        this.fetchData(id,page);
    }

    constructor(props) {
        super(props);
        this.state = {
            currentPage:1,
            orders:[],
            isLoading: true,
            customerId:null
        }
    }
    fetchData=async(id,page)=>{
        let respObj=await CustomerService.fetchCustomerOnlineOrders(id,parseInt(page));
        if(respObj===false){
            toast.error(process.env.ERROR_MSG);
            this.setState({isLoading: false});
        }else {
            this.setState({
                orders: respObj.data,
                currentPage: respObj.currentPage,
                totalPages: respObj.totalPages,
                totalRecords: respObj.totalRecords,
                isLoading: false,
                customerId: id
            });
        }
    }
    pageChange = async (page) => {
        Router.push("/customers/online/onlineOrders?page="+parseInt(page)+"&customerId="+this.state.customerId);
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
                        <Breadcrumb.Item active>Online Orders</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonSideNavCmp customerId={this.state.customerId} activeKey={"3"}/>
                        </FlexboxGrid.Item>
                        {this.state.isLoading === false &&
                        <FlexboxGrid.Item colspan={19}>
                            <Table
                                height={500}
                                data={this.state.orders}
                                onRowClick={rowData => {
                                    console.log(rowData);
                                }}
                            >
                                <Column width={200} align="left" fixed>
                                    <HeaderCell>Order Code</HeaderCell>
                                    <Cell dataKey="orderCode"/>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Order Date</HeaderCell>
                                    <Cell>{rowData => moment(rowData.createdAt).format("DD-MM-YYYY")}</Cell>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Order Mode</HeaderCell>
                                    <Cell dataKey="orderMode"/>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Status</HeaderCell>
                                    <Cell dataKey="status"/>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Delivery Type</HeaderCell>
                                    <Cell dataKey="deliveryType"/>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Payment Mode</HeaderCell>
                                    <Cell dataKey="paymentMode"/>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Amount</HeaderCell>
                                    <Cell>{rowData => "₹"+parseFloat(rowData.amount).toFixed(2)}</Cell>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Shipping+COD</HeaderCell>
                                    <Cell>{rowData => "₹"+parseFloat(rowData.shippingAmount).toFixed(2)}</Cell>
                                </Column>
                                <Column width={150} align="left">
                                    <HeaderCell>Total Amount</HeaderCell>
                                    <Cell>{rowData => "₹"+parseFloat(rowData.totalAmount).toFixed(2)}</Cell>
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
                            <div style={{padding: 20}}>
                                <Pagination
                                    prev
                                    next
                                    first
                                    last
                                    ellipsis
                                    total={this.state.totalRecords}
                                    limit={10}
                                    activePage={parseInt(this.state.currentPage)}
                                    boundaryLinks
                                    maxButtons={5}
                                    onChangePage={this.pageChange}
                                />
                            </div>
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

export default OnlineOrdersCmp;




