import React from "react";
import {
  FlexboxGrid,
  Input,
  InputGroup,
  Breadcrumb,
  Pagination,
  Table,
  Loader
} from "rsuite";
import { toast } from 'react-toastify';
import SearchIcon from "@rsuite/icons/Search";
import Link from "next/link";
import DeliveryService from "../../services/deliveryService";

const { Column, HeaderCell, Cell } = Table;

class PinCodeCmp extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      customers: [],
      currentPage: 1,
      totalPages: 0,
      totalRecords: 0,
      open: false,
      searchVal: "",
      holdSearchState: false,
      dataBeforeSearch: [],
    };
  }


  removeSearch = () => {
    let customers = this.state.dataBeforeSearch;
    this.setState({
      customers: customers,
      holdSearchState: false,
      dataBeforeSearch: [],
      searchVal: "",
    });
  };

  handleSearch = (e) => {
    if (e !== "") {
      if (!isNaN(parseInt(e))) {
        this.setState({ searchVal: parseInt(e) });
      }
    } else {
      this.setState({ searchVal: "" });
    }
  };

  search = async () => {
    if (this.state.searchVal.toString().length === 6) {
      this.setState({ isLoading: true });
      let respObj = await DeliveryService.searchCustomerByPin(
        this.state.searchVal
      );
      if (respObj === false) {
        toast.error(process.env.ERROR_MSG);
        this.setState({ isLoading: false });
      } else {
        let dataBeforeSearch = this.state.customers;
        this.setState({
          customers: respObj,
          holdSearchState: true,
          isLoading: false,
          dataBeforeSearch: dataBeforeSearch,
        });
      }
    } else {
      toast.error("Please enter a valid pincode.");
    }
  };

  removeSearch = () => {
    let customers = this.state.dataBeforeSearch
    this.setState({
      customers: customers,
      holdSearchState: false,
      dataBeforeSearch: [],
      searchVal: ""
    });
  }

  searchEnterKey = (e) => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={"padding-container"}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/dashboard">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Settings</Breadcrumb.Item>
            <Breadcrumb.Item active>Pincode</Breadcrumb.Item>
          </Breadcrumb>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={19}>
              <div className={"search-box"}>
                <InputGroup>
                  <Input
                    value={this.state.searchVal}
                    onChange={this.handleSearch}
                    maxLength={6}
                    placeholder={"Pincode"}
                    onKeyPress={this.searchEnterKey}
                  />
                  <InputGroup.Addon>
                    {this.state.holdSearchState === false && (
                      <SearchIcon
                        className={"cursor-pointer"}
                        onClick={() => {
                          this.search();
                        }}
                      />
                    )}
                    {this.state.holdSearchState === true && (
                      <CloseIcon
                        className={"cursor-pointer"}
                        onClick={() => {
                          this.removeSearch();
                        }}
                      />
                    )}
                  </InputGroup.Addon>
                </InputGroup>
              </div>
              {this.state.isLoading === false &&
                <>
                  <Table height={500} data={this.state.customers}
                    onRowClick={rowData => {
                      console.log(rowData);
                    }}>
                    <Column width={150} align="left" sortable fixed>
                      <HeaderCell>Id</HeaderCell>
                      <Cell dataKey="id" />
                    </Column>
                    <Column width={150} align="left">
                      <HeaderCell>Pincode</HeaderCell>
                      <Cell dataKey="pinCode" />
                    </Column>
                    <Column width={200} align="left" sortable>
                      <HeaderCell>City</HeaderCell>
                      <Cell dataKey={"city"} />
                    </Column>
                    <Column width={200} align="left">
                      <HeaderCell>State</HeaderCell>
                      <Cell dataKey="state" />
                    </Column>
                    <Column width={150} align="left">
                      <HeaderCell>COD Delivery</HeaderCell>
                      <Cell dataKey="codDelivery" />
                    </Column>
                    <Column width={150} align="left">
                      <HeaderCell>Prepaid Delivery</HeaderCell>
                      <Cell dataKey="prepaidDelivery" />
                    </Column>
                    <Column width={120} align="left">
                      <HeaderCell>Pickup</HeaderCell>
                      <Cell dataKey="pickup" />
                    </Column>
                    <Column width={150} align="left">
                      <HeaderCell>Reverse Pickup</HeaderCell>
                      <Cell dataKey="reversePickup" />
                    </Column>
                    <Column width={120} align="left">
                      <HeaderCell>District</HeaderCell>
                      <Cell dataKey="district" />
                    </Column>
                    <Column width={120} align="left">
                      <HeaderCell>Country</HeaderCell>
                      <Cell dataKey="country" />
                    </Column>
                  </Table>
                  <div style={{ padding: 20 }}>
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
                </>
              }
            </FlexboxGrid.Item>
          </FlexboxGrid>
          {this.state.isLoading === true &&
            <div>
              <Loader center size={"md"} content="loading" />
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default PinCodeCmp;
