import * as constants from "./constant";
import React from "react";
import fetchData from "../apis/dashboardApi";

/** Reset oNN fields on checkbox For Create Product */
export function emptyOnnFieldsForCreate(body) {
    body.annualMaxFam_OON = 0;
    body.annualMaxInd_OON = 0;
    body.annualMaxTMJ_OON = 0;
    body.coinsBAS_OON = 0;
    body.coinsDP_OON = 0;
    body.coinsMAJ_OON = 0;
    body.coinsORTHO_OON = 0;
    body.coinsTMJ_OON = 0;
    body.deductibleFam_OON = 0;
    body.deductibleInd_OON = 0;
    body.oOPM_Ind_OON = 0;
    body.oOPM_Mult_OON = 0;
    return body;
}

/** Reset oNN fields on checkbox for Edit product */
export function emptyOnnFieldsForEdit(body) {
    body.annualMaxFAM_oon = 0;
    body.annualMaxInd_oon = 0;
    body.annualMaxTMJ_oon = 0;
    body.coinsBAS_oon = 0;
    body.coinsDP_oon = 0;
    body.coinsMAJ_oon = 0;
    body.coinsOrtho_oon = 0;
    body.coinsTMJ_oon = 0;
    body.deductibleFam_oon = 0;
    body.deductibleInd_oon = 0;
    body.oopmInd_oon = 0;
    body.oopmMult_oon = 0;
    return body;
}

/**  Null check for Create Product */
export function nullCheckForCreate(body) {
    if (Number.isNaN(body.annualMaxFam)) { body.annualMaxFam = 0; }
    if (Number.isNaN(body.annualMaxFam_OON)) { body.annualMaxFam_OON = 0; }
    if (Number.isNaN(body.annualMaxInd)) { body.annualMaxInd = 0; }
    if (Number.isNaN(body.annualMaxInd_OON)) { body.annualMaxInd_OON = 0; }
    if (Number.isNaN(body.annualMaxTMJ)) { body.annualMaxTMJ = 0; }
    if (Number.isNaN(body.annualMaxTMJ_OON)) { body.annualMaxTMJ_OON = 0; }
    if (Number.isNaN(body.cDTYr)) { body.cDTYr = 0; }
    if (Number.isNaN(body.coinsBAS)) { body.coinsBAS = 0; }
    if (Number.isNaN(body.coinsBAS_OON)) { body.coinsBAS_OON = 0; }
    if (Number.isNaN(body.coinsDP)) { body.coinsDP = 0; }
    if (Number.isNaN(body.coinsDP_OON)) { body.coinsDP_OON = 0; }
    if (Number.isNaN(body.coinsMAJ)) { body.coinsMAJ = 0; }
    if (Number.isNaN(body.coinsMAJ_OON)) { body.coinsMAJ_OON = 0; }
    if (Number.isNaN(body.coinsORTHO)) { body.coinsORTHO = 0; }
    if (Number.isNaN(body.coinsORTHO_OON)) { body.coinsORTHO_OON = 0; }
    if (Number.isNaN(body.coinsTMJ)) { body.coinsTMJ = 0; }
    if (Number.isNaN(body.coinsTMJ_OON)) { body.coinsTMJ_OON = 0; }
    if (Number.isNaN(body.deductibleFam)) { body.deductibleFam = 0; }
    if (Number.isNaN(body.deductibleFam_OON)) { body.deductibleFam_OON = 0; }
    if (Number.isNaN(body.deductibleInd)) { body.deductibleInd = 0; }
    if (Number.isNaN(body.deductibleInd_OON)) { body.deductibleInd_OON = 0; }
    if (Number.isNaN(body.lifeTimeMaxTMJ)) { body.lifeTimeMaxTMJ = 0; }
    if (Number.isNaN(body.lifetimeMaxAdultInd)) { body.lifetimeMaxAdultInd = 0; }
    if (Number.isNaN(body.lifetimeMaxOrtho)) { body.lifetimeMaxOrtho = 0; }
    if (Number.isNaN(body.oON)) { body.oON = 0; }
    if (Number.isNaN(body.oOPM_Ind_OON)) { body.oOPM_Ind_OON = 0; }
    if (Number.isNaN(body.oOPM_Mult_OON)) { body.oOPM_Mult_OON = 0; }
    if (Number.isNaN(body.oOPM_PedInd)) { body.oOPM_PedInd = 0; }
    if (Number.isNaN(body.oOPM_PedMult)) { body.oOPM_PedMult = 0; }
    if (Number.isNaN(body.planYr)) { body.planYr = 0; }
    if (Number.isNaN(body.plnAgeLimit)) { body.plnAgeLimit = 0; }
    if (Number.isNaN(body.prNo)) { body.prNo = 0; }
    if (body.channel === null) { body.channel = ""; }
    if (body.dCUSAfeatures === null) { body.dCUSAfeatures = ""; }
    if (body.mNOcriteria === null) { body.mNOcriteria = ""; }
    if (body.renewal === null) { body.renewal = ""; }
    if (body.segment === null) { body.segment = ""; }
    if (body.waitingPeriod === null) { body.waitingPeriod = ""; }
    if (body.oOPM_INN === null) { body.oOPM_INN = ""; }
    if (body.oOPM_OON === null) { body.oOPM_OON = ""; }
    if (body.eHBbenchmark === null) { body.eHBbenchmark = ""; }
    if (body.ageLimit === null) { body.ageLimit = ""; }
    return body;
}

/** Null check for Edit Copay */
export function nullCheckForEditCopay(body) {
    if (body.ageLimit === null || body.ageLimit === undefined) { body.ageLimit = ""; }
    if (body.brand === null || body.brand === undefined) { body.brand = ""; }
    if (body.dcusaFeatures === null || body.dcusaFeatures === undefined) { body.dcusaFeatures = ""; }
    if (body.ehbBenchmark === null || body.ehbBenchmark === undefined) { body.ehbBenchmark = ""; }
    if (body.mnoCriteria === null || body.mnoCriteria === undefined) { body.mnoCriteria = ""; }
    if (Number.isNaN(body.oopmInd_oon)) { body.oopmInd_oon = 0; }
    if (Number.isNaN(body.oopmMult_oon)) { body.oopmMult_oon = 0; }
    if (body.oopmInd_oon === null || body.oopmInd_oon === undefined) { body.oopmInd_oon = 0; }
    if (body.oopmMult_oon === null || body.oopmMult_oon === undefined) { body.oopmMult_oon = 0; }
    if (body.oopm_INN === null || body.oopm_INN === undefined) { body.oopm_INN = ""; }
    if (body.oopm_OON === null || body.oopm_OON === undefined) { body.oopm_OON = ""; }
    if (Number.isNaN(body.oopm_PedInd)) { body.oopm_PedInd = 0; }
    if (Number.isNaN(body.oopm_PedMult)) { body.oopm_PedMult = 0; }
    if (body.oopm_PedInd === null || body.oopm_PedInd === undefined) { body.oopm_PedInd = 0; }
    if (body.oopm_PedMult === null || body.oopm_PedMult === undefined) { body.oopm_PedMult = 0; }
    if (body.planDesignId === null) { body.planDesignId = ""; }
    if (body.planNote === null || body.planNote === undefined) { body.planNote = ""; }
    if (body.planYear === null || body.planYear === undefined) { body.planYear = ""; }
    if (body.renewal === null || body.ageLimit === undefined) { body.renewal = ""; }
    if (body.state === null || body.state === undefined) { body.state = ""; }
    if (Number.isNaN(body.lifeTimeMaxOrtho)) { body.lifeTimeMaxOrtho = 0; }
    if (body.lifeTimeMaxOrtho === null || body.lifeTimeMaxOrtho === undefined) { body.lifeTimeMaxOrtho = 0; }
    if (body.waitingPeriod === null || body.waitingPeriod === undefined) { body.waitingPeriod = ""; }
    if (Number.isNaN(body.annualMaxFam)) { body.annualMaxFam = 0; }
    if (Number.isNaN(body.annualMaxInd)) { body.annualMaxInd = 0; }
    if (Number.isNaN(body.annualMaxTMJ)) { body.annualMaxTMJ = 0; }
    if (body.annualMaxFam === null || body.annualMaxFam === undefined) { body.annualMaxFam = 0; }
    if (body.annualMaxInd === null || body.annualMaxInd === undefined) { body.annualMaxInd = 0; }
    if (body.annualMaxTMJ === null || body.annualMaxTMJ === undefined) { body.annualMaxTMJ = 0; }
    return body;
}

/** Post request null check for Edit Coins */
export function nullCheckForEditCoins(body) {
    if (Number.isNaN(body.annualMaxFAM)) { body.annualMaxFAM = 0; }
    if (Number.isNaN(body.annualMaxFAM_oon)) { body.annualMaxFAM_oon = 0; }
    if (Number.isNaN(body.annualMaxInd)) { body.annualMaxInd = 0; }
    if (Number.isNaN(body.annualMaxInd_oon)) { body.annualMaxInd_oon = 0; }
    if (Number.isNaN(body.annualMaxTMJ_oon)) { body.annualMaxTMJ_oon = 0; }
    if (Number.isNaN(body.annualMaxTMJ)) { body.annualMaxTMJ = 0; }
    if (Number.isNaN(body.coinsBAS)) { body.coinsBAS = 0; }
    if (Number.isNaN(body.coinsBAS_oon)) { body.coinsBAS_oon = 0; }
    if (Number.isNaN(body.coinsDP)) { body.coinsDP = 0; }
    if (Number.isNaN(body.coinsDP_oon)) { body.coinsDP_oon = 0; }
    if (Number.isNaN(body.coinsMAJ)) { body.coinsMAJ = 0; }
    if (Number.isNaN(body.coinsMAJ_oon)) { body.coinsMAJ_oon = 0; }
    if (Number.isNaN(body.coinsOrtho)) { body.coinsOrtho = 0; }
    if (Number.isNaN(body.coinsOrtho_oon)) { body.coinsOrtho_oon = 0; }
    if (Number.isNaN(body.coinsTMJ)) { body.coinsTMJ = 0; }
    if (Number.isNaN(body.coinsTMJ_oon)) { body.coinsTMJ_oon = 0; }
    if (Number.isNaN(body.deductibleFam)) { body.deductibleFam = 0; }
    if (Number.isNaN(body.deductibleFam_oon)) { body.deductibleFam_oon = 0; }
    if (Number.isNaN(body.deductibleInd)) { body.deductibleInd = 0; }
    if (Number.isNaN(body.deductibleInd_oon)) { body.deductibleInd_oon = 0; }
    if (Number.isNaN(body.oopmInd_oon)) { body.oopmInd_oon = 0; }
    if (Number.isNaN(body.oopmMult_oon)) { body.oopmMult_oon = 0; }
    if (Number.isNaN(body.oopm_PedInd)) { body.oopm_PedInd = 0; }
    if (Number.isNaN(body.oopm_PedMult)) { body.oopm_PedMult = 0; }
    if (Number.isNaN(body.lifeTimeMaxAdultInd)) { body.lifeTimeMaxAdultInd = 0; }
    if (Number.isNaN(body.planYear)) { body.planYear = 0; }
    if (Number.isNaN(body.lifeTimeMaxOrtho)) { body.lifeTimeMaxOrtho = 0; }
    if (Number.isNaN(body.lifeTimeMaxTMJ)) { body.lifeTimeMaxTMJ = 0; }
    if (body.ageLimit === null || body.ageLimit === undefined) { body.ageLimit = ""; }
    if (body.brand === null || body.brand === undefined) { body.brand = ""; }
    if (body.deductibleNotes === null || body.deductibleNotes === undefined) { body.deductibleNotes = ""; }
    if (body.ehbBenchmark === null || body.ehbBenchmark === undefined) { body.ehbBenchmark = ""; }
    if (body.oon === null || body.oon === undefined) { body.oon = ""; }
    if (body.oopm_INN === null || body.oopm_INN === undefined) { body.oopm_INN = ""; }
    if (body.oopm_OON === null || body.oopm_OON === undefined) { body.oopm_OON = ""; }
    if (body.planDesignId === null) { body.planDesignId = ""; }
    if (body.mnoCriteria === null || body.mnoCriteria === undefined) { body.mnoCriteria = ""; }
    if (body.planNotes === null || body.planNotes === undefined) { body.planNotes = ""; }
    if (body.ppoFeatures === null || body.ppoFeatures === undefined) { body.ppoFeatures = ""; }
    if (body.ppoProviderReimb === null || body.ppoProviderReimb === undefined) { body.ppoProviderReimb = ""; }
    if (body.renewal === null || body.renewal === undefined) { body.renewal = ""; }
    if (body.state === null) { body.state = ""; }
    if (body.waitingPeriod === null) { body.waitingPeriod = ""; }
    return body;
}

/** Generate Schedule name */
export function getPlanScheduleName(type, state, brand) {
    let name = "";
    if (type === constants.PH) {
        name = constants.PEDIATRIC_PREFERRED;
    } else if (type === constants.PL) {
        name = constants.PEDIATRIC_BASIC;
    } else if (type === constants.AH) {
        name = constants.FAMILY_PREFERRED;
    } else if (type === constants.AL) {
        name = constants.FAMILY_BASIC;
    }
    return `${state} ${brand} ${name}`.trim();
}

/** Generate Schedule ID */
export function generateScheduleID(type, checked, props, states) {
    const productID = props.productId != null ? props.productId.productID.trim() : "";
    const state = props.productId != null ? props.productId.st.trim() : "";
    const year = props.productTablecreateParams != null ? props.productTablecreateParams.PlanYear.trim() : states.targetPlanYear.trim();
    const lastTwoyearValue = year.toString().slice(-2);
    let sharedName = "";
    let name = "";
    if (type === constants.PH) {
        sharedName = constants.PP;
        name = constants.PPF;
        if (states.ScheduleIdPH != null && states.ScheduleIdPH.value != null && states.ScheduleIdPH.value.trim().indexOf(constants.STD) !== -1) {
            return states.ScheduleIdPH.value;
        }
    } else if (type === constants.PL) {
        name = constants.PBC;
        sharedName = constants.PB;
        if (states.ScheduleIdPL != null && states.ScheduleIdPL.value != null && states.ScheduleIdPL.value.trim().indexOf(constants.STD) !== -1) {
            return states.ScheduleIdPL.value;
        }
    } else if (type === constants.AH) {
        name = constants.FPF;
        sharedName = constants.FP;
        if (states.ScheduleIdAH != null && states.ScheduleIdAH.value != null && states.ScheduleIdAH.value.trim().indexOf(constants.STD) !== -1) {
            return states.ScheduleIdAH.value;
        }
    } else if (type === constants.AL) {
        name = constants.FBC;
        sharedName = constants.FB;
        if (states.ScheduleIdAL != null && states.ScheduleIdAL.value != null && states.ScheduleIdAL.value.trim().indexOf(constants.STD) !== -1) {
            return states.ScheduleIdAL.value;
        }
    }
    if (checked) {
        return `SC00${year}${sharedName}${constants.STD}${lastTwoyearValue}D`.trim();
    }
    return `SC${productID}${state}${name}${lastTwoyearValue}D`.trim();
}

/** Generate Plan design ID */
export function generatePlanDesignID(type, states, props) {
    let productID = "";
    let state = "";
    let lastTwoyearValue = "";
    let name = "";
    if (props.productId !== null && props.productId.productID !== null) {
        productID = props.productId.productID.trim();
    }
    if (props.productId !== null && props.productId.st !== null) {
        state = props.productId.st.trim();
    }
    if (props.productTablecreateParams != null && props.productTablecreateParams.PlanYear != null) {
        lastTwoyearValue = props.productTablecreateParams.PlanYear.toString().slice(-2).trim();
    }
    if (states != null && states.targetPlanYear != null) {
        lastTwoyearValue = states.targetPlanYear.toString().slice(-2).trim();
    }
    if (type === constants.PH) {
        name = constants.PPF;
    } else if (type === constants.PL) {
        name = constants.PBC;
    } else if (type === constants.AH) {
        name = constants.FPF;
    } else if (type === constants.AL) {
        name = constants.FBC;
    }
    return `PD${productID}${state}${name}${lastTwoyearValue}D`.trim();
}

/** Generate plan Name */
export function getPlanName(type) {
    let name = "";
    if (type === constants.PH) {
        name = constants.PEDIATRIC_PREFERRED;
    } else if (type === constants.PL) {
        name = constants.PEDIATRIC_BASIC;
    } else if (type === constants.AH) {
        name = constants.FAMILY_PREFERRED;
    } else if (type === constants.AL) {
        name = constants.FAMILY_BASIC;
    }
    return name.trim();
}

export const paginationOptions = {
    paginationSize: 100,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "Next page",
    prePageTitle: "Pre page",
    firstPageTitle: "First page",
    lastPageTitle: "Last page",
    showTotal: true,
    sizePerPageList: [{
        text: "100", value: 100
    }, {
        text: "150", value: 150
    }, {
        text: "200", value: 200
    }],
    hidePageListOnlyOnePage: true
};

export const getPlanDesignCopayData = {
    "pAD_HMOPlanDesign": {
        "st": "",
        "product": "",
        "stName": "",
        "planDesign": ""
    },
    "planYr": "",
    "brand": "",
    "segment": "",
    "planID": "",
    "devStage": " ",
    "oON": "",
    "bAS": "",
    "mAJ": "",
    "mNO": "",
    "oOPM_PedInd": "",
    "oOPM_PedMult": "",
    "lifetimeMaxOrtho": "",
    "waitingPeriod": "",
    "eHBbenchmark": "",
    "ageLimit": "",
    "mNOcriteria": "",
    "renewal": "",
    "planNote": "",
    "dX": "",
    "pR": "",
    "oV": "",
    "oOPM_AdultInd": "",
    "oOPM_AdultMult": "",
    "oOPM": "",
    "dCUSAfeatures": "",
    "channel": "",
    "planDesignName": ""
};

export const getPlanDesignCoinsData = {
    "pAD_PPOPlanDesign": {
        "st": "",
        "product": "",
        "stName": "",
        "planDesign": "",
        "planID": "",
        "planYr": ""
    },
    "brand": "",
    "segment": "",
    "devStage": "",
    "oON": "",
    "dP": "",
    "bAS": "",
    "mAJ": "",
    "mNO": "",
    "tMJ": "",
    "dP_OON": "",
    "bAS_OON": "",
    "mAJ_OON": "",
    "mNO_OON": "",
    "tMJ_OON": "",
    "deductibleNote": "",
    "deductibleInd": "",
    "deductibleFam": "",
    "deductibleInd_OON": "",
    "deductibleFam_OON": "",
    "annualMaxInd": "",
    "annualMaxFam": "",
    "annualMaxInd_OON": "",
    "annualMaxFam_OON": "",
    "oOPM_PedInd": "",
    "oOPM_PedMult": "",
    "oOPM_Ind_OON": "",
    "oOPM_Mult_OON": "",
    "annualMaxTMJ": "",
    "lifeTimeMaxTMJ": "",
    "lifetimeMaxOrtho": "",
    "waitingPeriod": "",
    "eHBbenchmark": "",
    "ageLimit": "",
    "oOPM_INN": "",
    "oOPM_OON": "",
    "mNOcriteria": "",
    "renewal": "",
    "pPOproviderReimb": "",
    "pPOfeatures": "",
    "channel": "",
    "planNote": "",
    "planDesignName": ""
};

export function fetchDropDownOptions(dropDownId) {
    const URL = `${constants.LOOKUP_VALUES_BYGROUPID}${dropDownId}`;
    const dropDownOptionValue = [];
    fetchData(URL)
      .then((returnData) => {
        returnData.map((data) => {
            dropDownOptionValue.push({ "value": data.altId, "label": data.description });
            return null;
        });
        return dropDownOptionValue;
       })
      .catch((error) => {
            return dropDownOptionValue;
       });
       return dropDownOptionValue;
}

export const selectOptions = {
    [constants.DRAFT_FILTER]: [constants.DRAFT],
    [constants.PRELIM_FILTER]: [constants.PRELIM],
    [constants.FINAL_FILTER]: [constants.FINAL]
};

export function styleFormatter(cell, row) {
    return (
        <a href className="cursorTblPtr">
            <strong>{cell}</strong>
        </a>
    );
}