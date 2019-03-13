import React from "react";
import Select from "react-select";
import * as classConstants from "../util/constant-class";

export const ProductOptionSelect = ({ label, labelOptional = false, alignLabel = "", alignSelect = "", inputBlur = "", colSpan = "", selectClassName = "", id, style, placeholder,
    options, value, onChangeEvent, validate, option, validateKeysState, validateKey, validationMsg, required }) => {
    return (<React.Fragment>
        {labelOptional ? null : <td align={alignLabel}></td>}
        <td colSpan={colSpan} className={selectClassName} style={{ "padding": "15px" }}>
            <div style={{ "textAlign": "center" }}><font style={classConstants.redColor}>{required ? "* " : ""}</font><b>{label}:</b></div>
            <Select id={id} onBlur={inputBlur} name={id} className="selectDesign selectpicker show-tick show-menu-arrow padLeft" data-width="auto" placeholder={placeholder}
                data-size="10" style={style} options={options} value={value} style={{ "padding": "10px" }} onChange={onChangeEvent}></Select>
            {validate === false && (option === null || option === "") && validateKeysState.indexOf(validateKey) >= 0 &&
                <span style={classConstants.redColor}>{validationMsg}</span>
            }
        </td>
    </React.Fragment >);
};

export default ProductOptionSelect;