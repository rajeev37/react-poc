import React, { Component } from "react";
import { Button } from "react-bootstrap";
// require('es6-promise').polyfill();
// require('isomorphic-fetch');
import { replicate } from '../services/authAPIService';
import fetchData from "../services/fetchData";
import searchProduct from "../services/searchProduct"
import ProductOptionSelect from "../ProductOptionSelect";
import * as constants from "../util/constant";
import * as classConstant from "../util/constant-class";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            globalErr: false,
            isLoading: false,
            dashboardData: [],
            allyMessage: null,
            stateData: [],
            stateOption: null,
            brandData: [],
            brandOption: null,
            channelData: [],
            channelOption: null,
            productTypeData: [],
            productTypeDataOption: null,
            planYear: [],
            planYearOption: null,
            planDesignName: [],
            planDesignNameOption: null,
            devStageOptions: [],
            selectedDevStageOption: null,
            ProductListDisplay: false,
            validate: true,
            type: null,
            validateKeys: [],
            products: []
        };
        this.stateDetail = null;
        this.brandLength = null;
        this.callbrand = 1;
        this.brandDetail = null;
        this.channelLength = null;
        this.callchannel = 1;
        this.productTypeLength = null;
        this.callproduct = 1;
        this.productTypeDetail = null;
        this.planLength = null;
        this.callplan = 1;
        this.planYear = null;
        this.planDesignNameLength = null;
        this.callplanDesignName = 1;
        this.planDesignName = null;
        this.showConnErr = false;
        this.productListData = [];
        this.productListingColumns = [];
    }

    // Life cycle method on component mount
    componentDidMount() {
        // On page load, load the state dropdown value using API
        this.fetchStatesResponseData("/pad/states", constants.DATA_TYPE_DASHBOARD);
    }

    // On click of reset button
    resetSearch(e) {
        this.callbrand = 1; this.brandLength = null; this.callchannel = 1; this.channelLength = null; this.callproduct = 1; this.productTypeLength = null; this.callplan = 1; this.planLength = null; this.callplanDesignName = 1; this.planDesignNameLength = null;
        this.setState({ stateOption: "", brandOption: "", showPopup: false, channelOption: null, productTypeDataOption: null, planYearOption: null, planDesignNameOption: null, brandData: [], channelData: [], productTypeData: [], planYear: [], planDesignName: [], ProductListDisplay: false, validate: true, selectedDevStageOption: null, enableExport: false });
    }

    // populate plan design drop down values
    fetchPlanDesignValues = (stateValue, planYear) => {
        // get plan design names
        if (stateValue === null) {
            stateValue = this.props.searchOptions.state != null ? this.props.searchOptions.state.value : "";
        }
        if (stateValue === "" || stateValue === null) {
            return;
        }

        if (planYear === null) {
            planYear = "";
        }
        const planDesignURL = `/pad/products/getplandesignnames?${constants.URL_PARAM_STATE_CODE}=${stateValue}&${constants.URL_PARAM_PLAN_YEAR}=${planYear}`;
        const planDesignName = constants.DATA_TYPE_PLAN_DESIGN_NAME;
        this.fetchApiResponseData(planDesignURL, planDesignName);
    }

    replace(e) {
        e.preventDefault();
        const body = { "planId": "PD040001AZPPF28D", "planYr": "2028", "schCdtId": "SC002019FPSTD19F", "schId": "SC040001AZPBC28D", "scheduleId": "SC040001AZPPF28D", "shareSch": 0, "txUid": "dos61890" };
        replicate(body).then((response) => {
            alert("Response ", response);
        })
    }

    // State change on search page
    stateChange = (stateOption) => {
        this.callbrand = 1; this.callchannel = 1; this.callproduct = 1; this.callplan = 1; this.callplanDesignName = 1;
        this.brandLength = null; this.channelLength = null; this.productTypeLength = null; this.planLength = null; this.planDesignNameLength = null;
        this.setState({ stateOption: stateOption, brandOption: null, channelOption: null, productTypeDataOption: null, planYearOption: null, planDesignNameOption: null, brandData: [], channelData: [], productTypeData: [], planYear: [], planDesignName: [], validate: true });
        const URL = `/pad/product/filter?${constants.URL_PARAM_STATE_CODE}=${stateOption.value}`;
        const dataType = constants.DATA_TYPE_BRAND;
        this.fetchApiResponseData(URL, dataType);
        const stateValue = stateOption != null ? stateOption.value : null;
        this.fetchPlanDesignValues(stateValue, null);
    }

    // Brand change on search page
    brandChange = (brandOption) => {
        if (this.callbrand === 1) {
            this.callbrand = null;
        }
        this.callchannel = 1; this.callproduct = 1; this.callplan = 1;
        this.channelLength = null; this.productTypeLength = null; this.planLength = null;
        this.setState({ brandOption: brandOption, channelData: [constants.HCR], productTypeData: [], planYear: [] });
    }

    // Channel change on search page
    channelChange = (channelOption) => {
        if (this.callchannel === 1) {
            this.callchannel = null;
        }
        this.callproduct = 1; this.callplan = 1;
        this.productTypeLength = null; this.planLength = null;
        this.setState({ channelOption: channelOption, productTypeData: [], planYear: [] });
        const stateValue = this.state.stateOption.value;
        const brandValue = this.state.brandOption.value;
        const URL = `/pad/product/filter?${constants.URL_PARAM_STATE_CODE}=${stateValue}&${constants.URL_PARAM_BRAND_NAME}=${brandValue}`;
        const dataType = constants.DATA_TYPE_PRODUCT_TYPE;
        this.fetchApiResponseData(URL, dataType);
    }

    // Product Type change on search page
    productTypeChange = (productTypeDataOption) => {
        if (this.callproduct === 1) {
            this.callproduct = null;
        }
        this.callplan = 1; this.callplanDesignName = 1; this.planLength = null; this.planDesignNameLength = null;
        this.setState({ productTypeDataOption: productTypeDataOption, planYear: [] });
        const stateValue = this.state.stateOption.value;
        const brandValue = this.state.brandOption.value;
        const productValue = productTypeDataOption.value;
        const URL = `/pad/product/filter?${constants.URL_PARAM_STATE_CODE}=${stateValue}&${constants.URL_PARAM_BRAND_NAME}=${brandValue}&${constants.URL_PARAM_PRODUCT_TYPE}=${productValue}`;
        const dataType = constants.DATA_TYPE_PLAN_YEAR;
        this.fetchApiResponseData(URL, dataType);
    }

    // Plan year change on search page
    planYearChange = (planYearOption) => {
        if (this.callplan === 1) {
            this.callplan = null;
        }
        this.callplanDesignName = 1; this.planDesignNameLength = null;
        this.setState({ planYearOption: planYearOption, planDesignName: [], planDesignNameOption: null });
        const stateValue = this.state.stateOption != null ? this.state.stateOption.value : null;
        const planYearValue = planYearOption != null ? planYearOption.value : "";
        this.fetchPlanDesignValues(stateValue, planYearValue);
    }

    // Plan Design name change on search page
    planDesignNameChange = (planDesignNameOption) => {
        if (this.callplanDesignName === 1) {
            this.callplanDesignName = null;
        }
        this.callplanDesignName = 1; this.planDesignNameLength = null;
        this.setState({ planDesignNameOption: planDesignNameOption, planYear: [] });
        const stateValue = this.state.stateOption != null ? this.state.stateOption.value : "";
        const brandValue = this.state.brandOption != null ? this.state.brandOption.value : "";
        const productValue = this.state.productTypeDataOption != null ? this.state.productTypeDataOption.value : "";
        const planDesignName = planDesignNameOption.value;
        const URL = `/pad/product/filter?${constants.URL_PARAM_STATE_CODE}=${stateValue}&${constants.URL_PARAM_BRAND_NAME}=${brandValue}&${constants.URL_PARAM_PRODUCT_TYPE}=${productValue}&${constants.URL_PARAM_PLANDESIGN_NAME}=${planDesignName}`;
        const dataType = constants.DATA_TYPE_PLAN_YEAR;
        this.fetchApiResponseData(URL, dataType);
    }

    // Fetch states call
    fetchStatesResponseData(URL, dataType) {
        fetchData(URL)
            .then((data) => {
                this.setState({
                    [dataType]: data,
                    isLoading: false,
                    allyMessage: constants.LOAD_DASHBOARD_SUCCESS
                });
            })
            .catch((error) => {
                this.setState(prevState => ({
                    ...prevState,
                    dashboardData: {
                        ...prevState.dashboardData,
                        errorMessage: constants.ERROR_MESSAGE,
                        errorTitle: constants.ERROR_TITLE
                    },
                    isLoading: false,
                    globalErr: true,
                    a11yMessage: constants.LOAD_DASHBOARD_SUCCESS
                }));
            });
    }

    // Fetch api call on search click
    fetchApiResponseData(URL, dataType) {
        fetchData(URL).then((data) => {
            // Sort data in ascending order of plan year
            this.setState({
                [dataType]: data,
                isLoading: false,
                type: "",
                allyMessage: constants.LOAD_DASHBOARD_SUCCESS
            });
        }).catch((error) => {
            this.setState(prevState => ({
                ...prevState,
                dashboardData: {
                    ...prevState.dashboardData,
                    errorMessage: constants.ERROR_MESSAGE,
                    errorTitle: constants.ERROR_TITLE
                },
                isLoading: false,
                globalErr: true,
                a11yMessage: constants.LOAD_DASHBOARD_SUCCESS
            }));
        });
    }

    // Fetch api call on search click
    searchData(body, dataType) {
        searchProduct(body).then((data) => {
            // Sort data in ascending order of plan year
            if (dataType === constants.DATA_TYPE_PRODUCT_LIST && this.state.type === constants.DISPLAY_TYPE_LIST) {
                // this.filterProductListData(data);
                this.setState({
                    [dataType]: data,
                    isLoading: false
                });
            } else {
                this.setState({
                    [dataType]: data,
                    isLoading: false,
                    type: "",
                    allyMessage: constants.LOAD_DASHBOARD_SUCCESS
                });
            }
        }).catch((error) => {
            this.setState(prevState => ({
                ...prevState,
                dashboardData: {
                    ...prevState.dashboardData,
                    errorMessage: constants.ERROR_MESSAGE,
                    errorTitle: constants.ERROR_TITLE
                },
                isLoading: false,
                globalErr: true,
                a11yMessage: constants.LOAD_DASHBOARD_SUCCESS
            }));
        });
    }

    // Search button click
    productSearch(e) {
        if (!this.state.stateOption || !this.state.brandOption) {
            this.setState({ validate: false, validateKeys: [constants.VALIDATE_KEY_STATE, constants.VALIDATE_KEY_BRAND] });
        } else {
            this.setState({ ProductListDisplay: false, isLoading: true, type: constants.DISPLAY_TYPE_SEARCH });
            const stateValue = (this.state.stateOption !== null) ? this.state.stateOption.value : "";
            const brandValue = (this.state.brandOption !== null) ? this.state.brandOption.value : "";
            const channelValue = (this.state.channelOption !== null) ? this.state.channelOption.value : "";
            const productTypeValue = (this.state.productTypeDataOption !== null) ? this.state.productTypeDataOption.value : "";
            const planYear = (this.state.planYearOption !== null) ? this.state.planYearOption.value : "";
            const planDesignName = (this.state.planDesignNameOption !== null) ? this.state.planDesignNameOption.value : "";
            const devStage = (this.state.selectedDevStageOption !== null) ? this.state.selectedDevStageOption.value : "";
            this.searchProduct(null, stateValue, brandValue, channelValue, productTypeValue, planDesignName, planYear, devStage);
        }
    }

    // Fetch product detail
    searchProduct(productId, stateValue, brandValue, channelValue, productTypeValue, planDesignName, planYear, devStage) {
        this.stateDetail = stateValue;
        this.brandDetail = brandValue;
        this.productTypeDetail = productTypeValue;
        this.planDesignName = planDesignName;
        this.setState({ ProductListDisplay: true, isLoading: true, type: constants.DISPLAY_TYPE_LIST });
        const body = {
            state: stateValue,
            brand: brandValue,
            planYear: planYear,
            planDesign: planDesignName,
            channel: channelValue,
            productType: productTypeValue,
            devStage: devStage
        }
        const dataType = constants.DATA_TYPE_PRODUCT_LIST;
        this.searchData(body, dataType);
    }

    render() {
        const { stateOption, productListData, brandOption, channelOption, productTypeDataOption, planYearOption, planDesignNameOption, selectedDevStageOption, validate, globalErr, allyMessage } = this.state;
        // if (productListData != null && productListData.length > 0) {
        //     this.productListData = productListData;
        // }

        if (globalErr && allyMessage === null) {
            return (
                <div style={classConstant.marginTop}> <h2> {constants.ERROR} </h2> <h4>{this.state.dashboardData.errorMessage}</h4> </div>
            );
        } else if (allyMessage === null) {
            return (
                <div style={classConstant.marginTop}>{constants.LOADER} </div>
            );
        }
        if (this.state.dashboardData.length > 0) {
            this.stateData = [];
            this.state.dashboardData.map((data) => {
                this.stateData.push({ "value": data.stateCode, "label": `${data.stateCode} - ${data.stateName}` });
                return null;
            });
        } else {
            this.stateData = [];
        }

        if (this.state.brandData.length > 0) {
            this.brandData = [];
            this.brandLength = null;
            this.state.brandData.map((data) => {
                this.brandData.push({ "value": data, "label": data });
                return null;
            });
        } else {
            this.brandData = [];
        }

        if (this.state.brandData.length === 1 && this.callbrand === 1) {
            this.brandLength = 1;
            this.brandChange(this.brandData[0]);
        }

        if (this.state.channelData.length > 0) {
            this.channelData = [];
            this.channelLength = null;
            this.state.channelData.map((data) => {
                this.channelData.push({ "value": data, "label": data });
                return null;
            });
        } else {
            this.channelData = [];
        }

        if (this.state.channelData.length === 1 && this.callchannel === 1) {
            this.channelLength = 1;
            this.channelChange(this.channelData[0]);
        }

        if (this.state.productTypeData.length > 0) {
            this.productTypeData = [];
            this.productLength = null;
            this.state.productTypeData.map((data) => {
                this.productTypeData.push({ "value": data, "label": data });
                return null;
            });
        } else {
            this.productTypeData = [];
        }

        if (this.state.productTypeData.length === 1 && this.callproduct === 1) {
            this.productLength = 1;
            this.productTypeChange(this.productTypeData[0]);
        }

        if (this.state.planYear.length > 0) {
            this.planYear = [];
            this.planLength = null;
            this.state.planYear.map((data) => {
                this.planYear.push({ "value": data, "label": data });
                return null;
            });
        } else {
            this.planYear = [];
        }

        if (this.state.planYear.length === 1 && this.callplan === 1) {
            this.planLength = 1;
            this.planYearChange(this.planYear[0]);
        }

        if (this.props.Segment != null && this.props.Segment.length > 0) {
            this.segmentData = [];
            const segmentList = this.props.Segment.map((data) => {
                this.segmentData.push({ "value": data, "label": data });
                return segmentList;
            });
        } else {
            this.segmentData = [];
        }

        if (this.state.planDesignName.length > 0) {
            this.planDesignName = [];
            this.planDesignNameLength = null;
            this.state.planDesignName.map((data) => {
                this.planDesignName.push({ "value": data, "label": data });
                return null;
            });
        } else {
            this.planDesignName = [];
        }

        if (this.state.planDesignName.length === 1 && this.callplanDesignName === 1) {
            this.planDesignNameLength = 1;
        }
        if (this.state.dashboardData.errorMessage) {
            this.showConnErr = true;
        } else {
            this.showConnErr = false;
        }

        return (
            <React.Fragment>
                <div className="container body-content center" style={classConstant.bodyCenter}>
                    <div id="myDiv" className="animate-bottom" style={classConstant.animateButton}>
                        <table align="center" border="0" style={classConstant.tableStyle} cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td align="left" valign="top" colSpan="6">
                                        <h3><font color="green">{constants.TITLE_SEARCH_PAGE}</font></h3>
                                    </td>
                                    <td align="right" valign="top" colSpan="6">
                                        <font style={classConstant.planFontSizeWithRed}>{constants.REQUIRED_FIELD}</font>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="12">
                                        <hr style={classConstant.hrStyle} />
                                    </td>
                                </tr>
                                <tr>
                                    <ProductOptionSelect label={constants.LABEL_STATE} alignLabel={"middle"} id={"drpState"} selectClassName={classConstant.padLeft} placeholder={"Select State"} validate={validate} options={this.stateData} value={stateOption} onChangeEvent={this.stateChange}
                                        option={this.state.stateOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_STATE} validationMsg={constants.VALIDATION_STATE} required="true">
                                    </ProductOptionSelect>
                                    <ProductOptionSelect label={constants.LABEL_BRAND} alignLabel={"middle"} id={"drpBrand"} selectClassName={classConstant.padLeft} placeholder={"Select Brand"} validate={validate} options={this.brandData} value={(this.brandLength === 1) ? this.brandData : brandOption} onChangeEvent={this.brandChange}
                                        option={this.state.brandOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_BRAND} validationMsg={constants.VALIDATION_BRAND} required="true">
                                    </ProductOptionSelect>
                                    <ProductOptionSelect label={constants.LABEL_CHANNEL} alignLabel={"middle"} id={"drpChannel"} selectClassName={classConstant.padLeft} placeholder={"Select Channel"} validate={validate} options={this.channelData} value={(this.channelLength === 1) ? this.channelData : channelOption} onChangeEvent={this.channelChange}
                                        option={this.state.channelOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_CHANNEL} validationMsg={constants.VALIDATION_CHANNEL}>
                                    </ProductOptionSelect>
                                    <ProductOptionSelect label={constants.LABEL_PRODUCT_TYPE} alignLabel={"middle"} id={"drpProdType"} selectClassName={classConstant.padLeft} placeholder={"Select Product Type"} validate={validate} options={this.productTypeData} value={(this.productTypeLength === 1) ? this.productTypeData : productTypeDataOption} onChangeEvent={this.productTypeChange}
                                        option={this.state.productTypeDataOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_PRODUCT_TYPE} validationMsg={constants.VALIDATION_PRODUCT_TYPE}>
                                    </ProductOptionSelect>
                                    <ProductOptionSelect label={constants.LABEL_PLAN_YEAR} alignLabel={"middle"} id={"drpYear"} selectClassName={classConstant.padLeft} placeholder={"Select Plan Year"} validate={validate} options={this.planYear} value={(this.planLength === 1) ? this.planYear : planYearOption} onChangeEvent={this.planYearChange}
                                        option={this.state.planYearOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_PLAN_YEAR} validationMsg={constants.VALIDATION_PLAN_YEAR}>
                                    </ProductOptionSelect>
                                    <ProductOptionSelect label={constants.LABEL_PRODUCTDESIGN_NAME} alignLabel={"middle"} id={"drpPlDsgName"} selectClassName={classConstant.padLeft} placeholder={"Select Plan Design"} validate={validate} options={this.planDesignName} value={(this.planDesignNameLength === 1) ? this.planDesignName : planDesignNameOption} onChangeEvent={this.planDesignNameChange}
                                        option={this.state.planDesignNameOption} validateKeysState={this.state.validateKeys} validateKey={constants.VALIDATE_KEY_PRODUCT_NAME} validationMsg={constants.VALIDATION_PRODUCT_NAME}>
                                    </ProductOptionSelect>
                                </tr>
                                <tr>
                                    <td colSpan="12" align="right">
                                        <br />
                                        <input id="btnSearch" onClick={e => this.productSearch(e)} name="submit" style={classConstant.searchBtnStyle} type="button" value="Search Product" />
                                        {(this.props.userInfo != null && this.props.userInfo.isDeveloperUser) ? this.excel : ""}
                                        <input id="btnClear" style={classConstant.searchBtnStyle} type="button" value="Clear" onClick={e => this.resetSearch(e)} /> &nbsp;
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                {/* <BootstrapTable keyField="planDesignId" data={this.productListData} columns={this.productListingColumns}
                    noDataIndication={"No data available"} striped condensed hover /> */}
                <div>
                    <table id="products-data-table" className="table table-bordered table-hover nth_th_plans" style={classConstant.tableDesign} cellSpacing="0" cellPadding="0">
                        <thead style={classConstant.theadDesign}>
                            <tr>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_PRODUCT_ID}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_PLAN_YEAR}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_DEV_STAGE}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_SEGMENT}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_CHANNEL}</th>
                                <th style={classConstant.planDesignHeadStyle}>{constants.LABEL_PLAN_DESIGN_NAME}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_PLAN_DESIGN}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_SCHEDULE}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_EFFECTIVE_DATE}</th>
                                <th style={{ textAlign: "center" }}>{constants.LABEL_END_DATE}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productListData != null && productListData.length > 0 ? productListData.map((product, i) => {
                                return (<tr key={i}>
                                    <td>{product.productId}</td>
                                    <td>{product.planYear}</td>
                                    <td>{product.devstage}</td>
                                    <td>{product.segment}</td>
                                    <td>{product.channel}</td>
                                    <td>{product.planDesignName}</td>
                                    <td>{product.planDesignId}</td>
                                    <td>{product.scheduleId}</td>
                                    <td>{product.effectiveDate}</td>
                                    <td>{product.endDate}</td>
                                </tr>);
                            })
                                : <tr><td colSpan="10" style={classConstant.noDataStyle}>{constants.NO_DATA_AVAILABLE}</td></tr>}
                        </tbody>
                    </table>
                </div >
                <br />
                <div style={{ "float": "left" }}><b>Post service call for Replace</b></div>
                <Button
                    block
                    disabled={false}
                    type="submit" onClick={(e) => this.replace(e)}>
                    Replace
                    </Button>
            </React.Fragment>
        )
    }
}

export default Search;