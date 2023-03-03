import React from 'react';
import {FlexboxGrid, Breadcrumb, Table, Loader, Pagination} from 'rsuite';
import Link from 'next/link'
import CustomerService from "../../../services/customerService";
import Router from 'next/router'
import CommonSideNavCmp from "./commonSideNavCmp";
import {toast} from "react-toastify";

const {Column, HeaderCell, Cell} = Table;

class PurchaseAnalysisCmp extends React.Component {
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
            analyticsData:[],
            isLoading: true,
            customerId:null
        }
    }
    fetchData=async(id,page)=>{
        let respObj=await CustomerService.fetchCustomerInsight(id,parseInt(page));
        if(respObj===false){
            toast.error(process.env.ERROR_MSG);
            this.setState({isLoading: false});
        }else {
            this.setState({
                analyticsData: respObj.data,
                currentPage: respObj.currentPage,
                totalPages: respObj.totalPages,
                totalRecords: respObj.totalRecords,
                isLoading: false,
                customerId: id
            });
        }
    }
    pageChange = async (page) => {
        Router.push("/customers/online/purchaseAnalysis?page="+parseInt(page)+"&customerId="+this.state.customerId);
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
                        <Breadcrumb.Item active>Purchase Insights</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonSideNavCmp customerId={this.state.customerId} activeKey={"5"}/>
                        </FlexboxGrid.Item>
                        {this.state.isLoading === false &&
                        <FlexboxGrid.Item colspan={19}>
                            <Table
                                height={500}
                                data={this.state.analyticsData}
                                onRowClick={rowData => {
                                    console.log(rowData);
                                }}
                            >
                                <Column width={400} align="left" fixed>
                                    <HeaderCell>Product Name</HeaderCell>
                                    <Cell dataKey="doc.medicineName"/>
                                </Column>
                                <Column width={200} align="left" fixed>
                                    <HeaderCell>Total Quantity</HeaderCell>
                                    <Cell dataKey="totalQuantity"/>
                                </Column>
                                <Column width={200} align="left" fixed>
                                    <HeaderCell>Total Amount</HeaderCell>
                                    <Cell>{rowData => "₹"+parseFloat(rowData.totalAmount).toFixed(2)}</Cell>
                                </Column>
                                {/*<Column width={80} fixed="right">*/}
                                {/*    <HeaderCell>...</HeaderCell>*/}
                                {/*    <Cell style={{padding: '6px'}}>*/}
                                {/*        {rowData => (*/}
                                {/*            <Button appearance="link">*/}
                                {/*                View*/}
                                {/*            </Button>*/}
                                {/*        )}*/}
                                {/*    </Cell>*/}
                                {/*</Column>*/}
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

export default PurchaseAnalysisCmp;




