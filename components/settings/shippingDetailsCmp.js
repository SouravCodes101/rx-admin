import React from "react";
import {
  FlexboxGrid,
  Breadcrumb,
  Loader,
  Input,
  ButtonToolbar,
  Button,
  Form,
  TagInput,
  Grid,
  Row,
  Col,
  Checkbox,
} from "rsuite";
import Link from "next/link";
import { toast } from "react-toastify";
import SettingsService from "../../services/settingsService";
import utility from "../../util/utility";

class ShippingDetailsCmp extends React.Component {
  async componentDidMount() {
    let respObj = await SettingsService.fetchShippingDetails();
    if (respObj === false || respObj === null) {
      this.setState({ isLoading: false });
      toast.error(process.env.ERROR_MSG);
    } else {
      this.setState({
        isLoading: false,
        shipping: respObj.shipping,
        shippingExemptionLimit: respObj.shippingExemptionLimit,
        cod: respObj.cod,
        codExemptionLimit: respObj.codExemptionLimit,
        prepayDiscount: respObj.prepayDiscount,
        localShipping: respObj.localShipping,
        localShippingLimit: respObj.localShipping,
        prepayDiscountExemptionLimit: respObj.prepayDiscountExemptionLimit,
        id: respObj.id
      });
    }
    
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shipping: "",
      shippingExemptionLimit: "",
      cod: "",
      codExemptionLimit: "",
      prepayDiscount: "",
      localShipping: "",
      localShippingLimit: "",
      prepayDiscountExemptionLimit: "",
      id: ""
    };
  }
  navigateMain = (url) => {
    Router.push(url);
  };
  updateShippingDetails = async () => {
    let shipping=parseFloat(this.state.shipping);
    let shippingExemptionLimit=parseFloat(this.state.shippingExemptionLimit);
    let cod=parseFloat(this.state.cod);
    let codExemptionLimit=parseFloat(this.state.codExemptionLimit);
    let prepayDiscount=parseFloat(this.state.prepayDiscount);
    let localShipping=parseFloat(this.state.localShipping);
    let localShippingLimit=parseFloat(this.state.localShippingLimit);
    let prepayDiscountExemptionLimit=parseFloat(this.state.prepayDiscountExemptionLimit);
    //validations
    if (shipping === ""|| utility.checkNumber(shipping) === false || shipping === null) {
      toast.error("Please enter valid Shipping value.");
      return false;
    }
    if (shippingExemptionLimit === ""|| utility.checkNumber(shippingExemptionLimit) === false || shippingExemptionLimit === null) {
      toast.error("Please enter valid shipping exemption limit value.");
      return false;
    }
    if (cod === ""|| utility.checkNumber(cod) === false || cod === null) {
      toast.error("Please enter valid Cash On Delivery value.");
      return false;
    }
    if (codExemptionLimit === ""|| utility.checkNumber(codExemptionLimit) === false || codExemptionLimit === null) {
      toast.error("Please enter valid COD exemption limit value.");
      return false;
    }
    if (prepayDiscount === ""|| utility.checkNumber(prepayDiscount) === false || prepayDiscount === null) {
      toast.error("Please enter valid Prepay Discount.");
      return false;
    }
    if (localShipping === ""|| utility.checkNumber(prepayDiscountExemptionLimit) === false || prepayDiscountExemptionLimit === null) {
      toast.error("Please enter valid Local Shipping.");
      return false;
    }
    if (localShippingLimit === ""|| utility.checkNumber(prepayDiscountExemptionLimit) === false || prepayDiscountExemptionLimit === null) {
      toast.error("Please enter valid Local Shipping Limit.");
      return false;
    }
    if (prepayDiscountExemptionLimit === "" || utility.checkNumber(prepayDiscountExemptionLimit) === false || prepayDiscountExemptionLimit === null) {
      toast.error("Please enter valid Prepay Discount Exemption Limit");
      return false;
    }
    if(this.state.id === "" || this.state.id === null) {
      return false;
    }
    let payload = {
      shipping: this.state.shipping,
      shippingExemptionLimit: this.state.shippingExemptionLimit,
      cod: this.state.cod,
      codExemptionLimit: this.state.codExemptionLimit,
      prepayDiscount: this.state.prepayDiscount,
      localShipping: this.state.localShipping,
      localShippingLimit: this.state.localShippingLimit,
      prepayDiscountExemptionLimit: this.state.prepayDiscountExemptionLimit,
      id:this.state.id
    };
    this.setState({ isLoading: true });
    let respObj = await SettingsService.updateShippingDetails(payload);
    if (respObj === false) {
      toast.error(process.env.ERROR_MSG);
    } else {
      let respObj = await SettingsService.fetchShippingDetails();
      if (respObj === false) {
        toast.error(process.env.ERROR_MSG);
      } else {
        this.setState({ isLoading: false, shippingDetails: respObj });
      }
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
            <Breadcrumb.Item active>Shipping Details</Breadcrumb.Item>
          </Breadcrumb>
          <FlexboxGrid justify="center">
            <Grid fluid>
              <Form>
                <Row gutter={16}>
                  <Col xs={14}>
                    <Form.Group controlId="shipping" className={"margin-btn"}>
                      <Form.ControlLabel>Shipping</Form.ControlLabel>
                       <Form.Control
                        name="shipping"
                        value={this.state.shipping}
                        onChange={(e) => {
                          this.setState({ shipping: e });
                        }}
                      /> 
                    </Form.Group>
                  </Col>
                  <Col xs={8}>
                    <Form.Group
                      controlId="shippingExemptionLimit"
                      className={"margin-btn"}
                    >
                      <Form.ControlLabel>
                        Shipping Exemption Limit
                      </Form.ControlLabel>
                      <Form.Control
                        name="shippingExemptionLimit"
                        value={this.state.shippingExemptionLimit}
                        onChange={(e) => {
                          this.setState({ shippingExemptionLimit: e });
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={14}>
                    <Form.Group controlId="cod" className={"margin-btn"}>
                      <Form.ControlLabel>Cash On Delivery</Form.ControlLabel>
                      <Form.Control name="cod" value={this.state.cod} onChange={(e)=>{this.setState({cod:e})}}/>
                    </Form.Group>
                  </Col>
                  <Col xs={8}>
                    <Form.Group
                      controlId="codExemptionLimit"
                      className={"margin-btn"}
                    >
                      <Form.ControlLabel>COD Exemption Limit</Form.ControlLabel>
                      <Form.Control name="codExemptionLimit" value={this.state.codExemptionLimit} onChange={(e)=>{this.setState({codExemptionLimit:e})}}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={14}>
                    <Form.Group
                      controlId="prepayDiscount"
                      className={"margin-btn"}
                    >
                      <Form.ControlLabel>Prepay Discount</Form.ControlLabel>
                      <Form.Control name="prepayDiscount" />
                    </Form.Group>
                  </Col>
                  <Col xs={8}>
                    <Form.Group
                      controlId="localShipping"
                      className={"margin-btn"}
                    >
                      <Form.ControlLabel>Local Shipping</Form.ControlLabel>
                      <Form.Control name="localShipping" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={14}>
                    <Form.Group
                      controlId="localShippingLimit"
                      className={"margin-btn"}
                    >
                      <Form.ControlLabel>
                        Local Shipping Limit
                      </Form.ControlLabel>
                      <Form.Control name="localShippingLimit" />
                    </Form.Group>
                  </Col>
                  <Col xs={9}>
                    <Form.Group controlId="prepayDiscountExemptionLimit" className={"margin-btn"}   >
                      <Form.ControlLabel>
                        Prepay Discount Exemption Limit
                      </Form.ControlLabel>
                      <Form.Control name="prepayDiscountExemptionLimit" />
                    </Form.Group>
                  </Col>
                </Row>
               
                <Form.Group className="margin-top">
                  <ButtonToolbar>
                    <Button
                      appearance="primary"
                      onClick={this.updateShippingDetails}
                    >
                      Update
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Grid>
          </FlexboxGrid>
        </div>
      </React.Fragment>
    );
  }
}

export default ShippingDetailsCmp;
