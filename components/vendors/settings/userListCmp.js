import React from 'react';
import {FlexboxGrid, Breadcrumb, Table, Loader, Button, Pagination} from 'rsuite';
import Link from 'next/link'
import {toast} from "react-toastify";
import CommonMenuCmp from "./commonMenu";
import VendorService from "../../../services/vendorService";
import Router from "next/router";
import moment from "moment";

const {Column, HeaderCell, Cell} = Table;

class UserListCmp extends React.Component {
    async componentDidMount() {
        let respObj=await VendorService.fetchVendorById(this.props.vendorId);
        this.setState({isLoading:false});
        if(respObj===false) {
            toast.error(process.env.ERROR_MSG);
        }else{
            let isActive="";
            if(respObj.isActive==="Y"){
                isActive=true;
            }else{
                isActive=false;
            }
            this.setState({vendorData:respObj});
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            vendorData:"",
            page:"",
            isLoading: false,
            vendors:null,
            totalRecords:null,
            totalPages:null
        }
    }
    navAdd=()=>{
        let url = "/vendors/" + this.state.vendorData._id + "/addUser";
        Router.push('/vendors/[vendorId]/addUser', url);
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Vendors</Breadcrumb.Item>
                        <Breadcrumb.Item><Link href="/vendors/list?page=1">Vendor List</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>User List</Breadcrumb.Item>
                    </Breadcrumb>

                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={5}>
                            <CommonMenuCmp vendorId={this.props.vendorId} activeKey={"2"}/>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={19}>
                            <div>
                                <Button appearance="primary" onClick={()=>{this.navAdd()}}>Add User</Button>
                            </div>
                        {/*    <br/>*/}
                        {/*    {this.state.isLoading === false &&*/}
                        {/*    <>*/}
                        {/*        <Table*/}
                        {/*            height={500}*/}
                        {/*            data={this.state.vendors}*/}
                        {/*            onRowClick={rowData => {*/}
                        {/*                console.log(rowData);*/}
                        {/*            }}*/}
                        {/*            onSortColumn={this.handleSortColumn}*/}
                        {/*            // sortColumn={sortColumn}*/}
                        {/*            // sortType={sortType}*/}
                        {/*        >*/}
                        {/*            <Column width={150} align="left" sortable fixed>*/}
                        {/*                <HeaderCell>Name</HeaderCell>*/}
                        {/*                <Cell dataKey="orgName"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={100} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>Created At</HeaderCell>*/}
                        {/*                <Cell dataKey="createdAt"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={150} align="left" fullText>*/}
                        {/*                <HeaderCell>E-mail</HeaderCell>*/}
                        {/*                <Cell dataKey="orgEmail"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={100} align="left" fullText>*/}
                        {/*                <HeaderCell>Phone</HeaderCell>*/}
                        {/*                <Cell dataKey="orgPhone"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={130} align="left" fullText>*/}
                        {/*                <HeaderCell>Address Line1 </HeaderCell>*/}
                        {/*                <Cell dataKey="addressLine1"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={130} align="left" fullText>*/}
                        {/*                <HeaderCell>Address Line 2</HeaderCell>*/}
                        {/*                <Cell dataKey="address Line 2"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={100} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>city</HeaderCell>*/}
                        {/*                <Cell dataKey="city"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={70} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>Pin Code</HeaderCell>*/}
                        {/*                <Cell dataKey="pinCode"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={100} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>State</HeaderCell>*/}
                        {/*                <Cell dataKey="state"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={70} align="left" fullText>*/}
                        {/*                <HeaderCell>Country</HeaderCell>*/}
                        {/*                <Cell dataKey="country"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={100} align="left" fullText>*/}
                        {/*                <HeaderCell>Landmark</HeaderCell>*/}
                        {/*                <Cell dataKey="landmark"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={80} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>Area</HeaderCell>*/}
                        {/*                <Cell dataKey="area"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={80} align="left" sortable fullText>*/}
                        {/*                <HeaderCell>Is Active</HeaderCell>*/}
                        {/*                <Cell dataKey="isActive"/>*/}
                        {/*            </Column>*/}
                        {/*            <Column width={80} fixed="right">*/}
                        {/*                <HeaderCell>...</HeaderCell>*/}
                        {/*                <Cell style={{padding: '6px'}}>*/}
                        {/*                    {rowData => (*/}
                        {/*                        <Button appearance="link" onClick={()=>{this.navSettings(rowData)}}>*/}
                        {/*                            Settings*/}
                        {/*                        </Button>*/}
                        {/*                    )}*/}
                        {/*                </Cell>*/}
                        {/*            </Column>*/}
                        {/*        </Table>*/}
                        {/*        <div style={{padding: 20}}>*/}
                        {/*            <Pagination*/}
                        {/*                prev*/}
                        {/*                next*/}
                        {/*                first*/}
                        {/*                last*/}
                        {/*                ellipsis*/}
                        {/*                total={this.state.totalRecords}*/}
                        {/*                limit={10}*/}
                        {/*                activePage={parseInt(this.state.page)}*/}
                        {/*                boundaryLinks*/}
                        {/*                maxButtons={5}*/}
                        {/*                onChangePage={this.pageChange}*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </>*/}
                        {/*    }*/}
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

export default UserListCmp;