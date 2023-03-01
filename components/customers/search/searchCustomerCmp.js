import React from 'react';
import {Modal, FlexboxGrid,Input, InputGroup, Breadcrumb, Sidenav, Nav, Table, Loader, Pagination, Button} from 'rsuite';
import Link from 'next/link'
import GroupIcon from '@rsuite/icons/legacy/Group';
import SearchIcon from '@rsuite/icons/Search';
import PeoplesIcon from '@rsuite/icons/Peoples';
import CustomerService from "../../../services/customerService";
import CloseIcon from '@rsuite/icons/Close';
import moment from "moment";
import Image from 'next/image'
import UserInfoIcon from '@rsuite/icons/UserInfo';
import Router from 'next/router'
import { toast } from 'react-toastify';

const {Column, HeaderCell, Cell} = Table;


class SearchCustomerCmp extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            holdSearchState:false
        }
    }
    navigateMain=(url)=>{
        Router.push(url);
    }
    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Users</Breadcrumb.Item>
                        <Breadcrumb.Item active>Search Customers</Breadcrumb.Item>
                    </Breadcrumb>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={4}>
                            <div style={{width: 240}}>
                                <Sidenav defaultOpenKeys={['3', '4']}>
                                    <Sidenav.Body>
                                        <Nav activeKey="3">
                                            <Nav.Item eventKey="1" icon={<PeoplesIcon/>} onClick={()=>{this.navigateMain("/customers/online/list?page=1")}}>
                                                Online Customers
                                            </Nav.Item>
                                            <Nav.Item eventKey="2" icon={<GroupIcon/>} onClick={()=>{this.navigateMain("/customers/offline/list?page=1")}}>
                                                Offline Customers
                                            </Nav.Item>
                                            <Nav.Item eventKey="3" icon={<SearchIcon/>}>
                                                Search Customers
                                            </Nav.Item>
                                        </Nav>
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={20}>
                            <div className={"search-box"}>
                                <InputGroup>
                                    <Input value={this.state.searchVal} onChange={this.handleSearch} maxLength={10}
                                           placeholder={"Phone"} onKeyPress={this.searchEnterKey}/>
                                    <InputGroup.Addon>
                                        {this.state.holdSearchState === false &&
                                        <SearchIcon className={"cursor-pointer"} onClick={() => {
                                            this.search()
                                        }}/>
                                        }
                                        {this.state.holdSearchState === true &&
                                        <CloseIcon className={"cursor-pointer"} onClick={()=>{this.removeSearch()}}/>
                                        }
                                    </InputGroup.Addon>
                                </InputGroup>
                            </div>
                            {/*{this.state.isLoading === false &&*/}
                            {/*<>*/}
                            {/*    <Table*/}
                            {/*        height={500}*/}
                            {/*        data={this.state.customers}*/}
                            {/*        onRowClick={rowData => {*/}
                            {/*            console.log(rowData);*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <Column width={200} align="left" fixed>*/}
                            {/*            <HeaderCell>Name</HeaderCell>*/}
                            {/*            <Cell dataKey="name"/>*/}
                            {/*        </Column>*/}
                            {/*        <Column width={200} align="left" fixed>*/}
                            {/*            <HeaderCell>Member Since</HeaderCell>*/}
                            {/*            <Cell>{rowData => moment(rowData.memberSince).format("DD-MM-YYYY")}</Cell>*/}
                            {/*        </Column>*/}
                            {/*        <Column width={200} align="left" fixed>*/}
                            {/*            <HeaderCell>Phone</HeaderCell>*/}
                            {/*            <Cell>{rowData => rowData.hasOwnProperty("phone")===true?rowData.phone:(rowData.hasOwnProperty("contactNo")===true?rowData.contactNo:"")}</Cell>*/}
                            {/*        </Column>*/}
                            {/*        <Column width={200} align="left" fixed>*/}
                            {/*            <HeaderCell>Email</HeaderCell>*/}
                            {/*            <Cell dataKey="email"/>*/}
                            {/*        </Column>*/}
                            {/*        <Column width={80} fixed="right">*/}
                            {/*            <HeaderCell>...</HeaderCell>*/}
                            {/*            <Cell style={{padding: '6px'}}>*/}
                            {/*                {rowData => (*/}
                            {/*                    <Button appearance="link" onClick={() => {*/}
                            {/*                        this.navigate(rowData)*/}
                            {/*                    }}>*/}
                            {/*                        Details*/}
                            {/*                    </Button>*/}
                            {/*                )}*/}
                            {/*            </Cell>*/}
                            {/*        </Column>*/}
                            {/*    </Table>*/}
                            {/*    {this.state.holdSearchState === false &&*/}
                            {/*    <div style={{padding: 20}}>*/}
                            {/*        <Pagination*/}
                            {/*            prev*/}
                            {/*            next*/}
                            {/*            first*/}
                            {/*            last*/}
                            {/*            ellipsis*/}
                            {/*            total={this.state.totalRecords}*/}
                            {/*            limit={10}*/}
                            {/*            activePage={parseInt(this.state.currentPage)}*/}
                            {/*            boundaryLinks*/}
                            {/*            maxButtons={5}*/}
                            {/*            onChangePage={this.pageChange}*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    }*/}
                            {/*</>*/}
                            {/*}*/}
                        </FlexboxGrid.Item>

                    </FlexboxGrid>

                    {this.state.isLoading === true &&
                    <div>
                        <Loader center size={"md"} content="loading"/>
                    </div>
                    }
                </div>

                {/*<Modal open={this.state.open} onClose={this.handleClose}>*/}
                {/*    <Modal.Header>*/}
                {/*        <Modal.Title></Modal.Title>*/}
                {/*    </Modal.Header>*/}
                {/*    <Modal.Body>*/}
                {/*        {this.state.selectedData !== null &&*/}
                {/*        <Image className={"cursor-pointer"}*/}
                {/*               src={"/api/" + this.state.selectedData.profilePic.filePathOpt} width={300} height={300}/>*/}
                {/*        }*/}
                {/*    </Modal.Body>*/}
                {/*    <Modal.Footer>*/}
                {/*        <Button onClick={this.handleClose} appearance="primary">*/}
                {/*            Close*/}
                {/*        </Button>*/}
                {/*    </Modal.Footer>*/}
                {/*</Modal>*/}
            </React.Fragment>
        )
    }
}

export default SearchCustomerCmp;




