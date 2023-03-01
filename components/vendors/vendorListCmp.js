import React from 'react';
import {FlexboxGrid, Breadcrumb, Table, Loader, Button, Pagination} from 'rsuite';
import Link from 'next/link'
import {toast} from "react-toastify";
import CommonMenuCmp from "./commonMenu";
import VendorService from "../../services/vendorService";
import Router from "next/router";
import moment from "moment";

const {Column, HeaderCell, Cell} = Table;

class VendorListCmp extends React.Component {
     componentDidMount() {
        const url = new URL(window.location.href);
        let pageNo = url.searchParams.get("page");
        this.setState({page:pageNo});
        this.fetchData(pageNo);
    }
    componentWillReceiveProps(newProps){
        const url = new URL(window.location.href);
        let pageNo = url.searchParams.get("page");
        this.fetchData(pageNo);
    }
    constructor(props) {
        super(props);
        this.state = {
            page:"",
            isLoading: true,
            vendors:null,
            totalRecords:null,
            totalPages:null
        }
    }
    fetchData=async (page)=>{
        let respObj=await VendorService.fetchVendorList(page);
        this.setState({"isLoading":false});
        if(respObj===false) {
            toast.error(process.env.ERROR_MSG);
        }else{
            let temp=[];
            for(let item of respObj.data){
                item["createdAt"]=moment(item.createdAt).format("DD-MM-YYYY");
                temp.push(item);
            }
            this.setState({vendors:temp,page:respObj.currentPage,totalRecords:respObj.totalRecords,totalPages:respObj.totalPages});
        }
    }
    pageChange=(page)=>{
        Router.push("/vendors/list?page="+page.toString());
    }
    handleSortColumn=(sortColumn, sortType)=>{
    }
    navAdd=()=>{
        Router.push("/vendors/addVendor");
    }
    navSettings=(selectedData)=>{
        let url = "/vendors/" + selectedData._id + "/viewVendor";
        Router.push('/vendors/[vendorId]/viewVendor', url);
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Vendors</Breadcrumb.Item>
                        <Breadcrumb.Item active>Vendor List</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonMenuCmp activeKey={"1"}/>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={19}>
                            <div>
                                <Button appearance="primary" onClick={()=>{this.navAdd()}}>Add</Button>
                            </div>
                            <br/>
                            {this.state.isLoading === false &&
                                <>
                                <Table
                                    height={500}
                                    data={this.state.vendors}
                                    onRowClick={rowData => {
                                        console.log(rowData);
                                    }}
                                    onSortColumn={this.handleSortColumn}
                                    // sortColumn={sortColumn}
                                    // sortType={sortType}
                                >
                                    <Column width={150} align="left" sortable fixed>
                                        <HeaderCell>Name</HeaderCell>
                                        <Cell dataKey="orgName"/>
                                    </Column>
                                    <Column width={100} align="left" sortable fullText>
                                        <HeaderCell>Created At</HeaderCell>
                                        <Cell dataKey="createdAt"/>
                                    </Column>
                                    <Column width={150} align="left" fullText>
                                        <HeaderCell>E-mail</HeaderCell>
                                        <Cell dataKey="orgEmail"/>
                                    </Column>
                                    <Column width={100} align="left" fullText>
                                        <HeaderCell>Phone</HeaderCell>
                                        <Cell dataKey="orgPhone"/>
                                    </Column>
                                    <Column width={130} align="left" fullText>
                                        <HeaderCell>Address Line1 </HeaderCell>
                                        <Cell dataKey="addressLine1"/>
                                    </Column>
                                    <Column width={130} align="left" fullText>
                                        <HeaderCell>Address Line 2</HeaderCell>
                                        <Cell dataKey="addressLine2"/>
                                    </Column>
                                    <Column width={100} align="left" sortable fullText>
                                        <HeaderCell>city</HeaderCell>
                                        <Cell dataKey="city"/>
                                    </Column>
                                    <Column width={70} align="left" sortable fullText>
                                        <HeaderCell>Pin Code</HeaderCell>
                                        <Cell dataKey="pinCode"/>
                                    </Column>
                                    <Column width={100} align="left" sortable fullText>
                                        <HeaderCell>State</HeaderCell>
                                        <Cell dataKey="state"/>
                                    </Column>
                                    <Column width={70} align="left" fullText>
                                        <HeaderCell>Country</HeaderCell>
                                        <Cell dataKey="country"/>
                                    </Column>
                                    <Column width={100} align="left" fullText>
                                        <HeaderCell>Landmark</HeaderCell>
                                        <Cell dataKey="landmark"/>
                                    </Column>
                                    <Column width={80} align="left" sortable fullText>
                                        <HeaderCell>Area</HeaderCell>
                                        <Cell dataKey="area"/>
                                    </Column>
                                    <Column width={80} align="left" sortable fullText>
                                        <HeaderCell>Is Active</HeaderCell>
                                        <Cell dataKey="isActive"/>
                                    </Column>
                                    <Column width={80} fixed="right">
                                        <HeaderCell>...</HeaderCell>
                                        <Cell style={{padding: '6px'}}>
                                            {rowData => (
                                                <Button appearance="link" onClick={()=>{this.navSettings(rowData)}}>
                                                    Settings
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
                                        activePage={parseInt(this.state.page)}
                                        boundaryLinks
                                        maxButtons={5}
                                        onChangePage={this.pageChange}
                                    />
                                </div>
                                </>
                            }
                        </FlexboxGrid.Item>
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

export default VendorListCmp;