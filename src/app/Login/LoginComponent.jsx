import React, { Component } from 'react';
import Select from "react-select";
import { Button } from "react-bootstrap";
import authenticator, { replicate } from '../services/authAPIService';
// import { Redirect } from 'react-router-dom';

// import FormErrors from '../common/FormErrors';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            states: [],
            stateOption: null
        };
        this.getStates();
    }

    getStates() {
        authenticator().then((response) => {
            // console.log("Response ", response);
            this.setState({
                states: response
            });
        });

    }

    login(e) {
        e.preventDefault();
        const body = { "planId": "PD040001AZPPF28D", "planYr": "2028", "schCdtId": "SC002019FPSTD19F", "schId": "SC040001AZPBC28D", "scheduleId": "SC040001AZPPF28D", "shareSch": 0, "txUid": "dos61890" };
        replicate(body).then((response) => {
            alert("Response ", response);
        })
    }

    stateChange = (stateOption) => {
        this.setState({ stateOption: stateOption });
    }

    render() {

        if (this.state.states.length > 0) {
            this.stateData = [];
            this.state.states.map((data) => {
                this.stateData.push({ "value": data.stateCode, "label": data.stateName });
                return null;
            });
        } else {
            this.stateData = [];
        }

        return (
            <div>
                <h1 className="text-info">Fetch State Demo</h1>
                <div>
                    <form onSubmit={this.login}>
                        <Select autosize={false} id="drpState" name="drpState" className="selectDesign selectpicker show-tick show-menu-arrow"
                            data-width="auto" placeholder="Select State" data-size="10" options={this.stateData} value={this.state.stateOption} onChange={this.stateChange}>
                        </Select>
                        <h1 className="text-info">Sample Replace call(Post)</h1>
                        <Button
                            block
                            disabled={false}
                            type="submit">
                            Replace call
                    </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;