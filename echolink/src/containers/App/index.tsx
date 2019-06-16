import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import reducer from "./reducer";
import saga from "./saga";
import * as selectors from "./selectors";
import * as actions from "./actions";
import * as models from "./models";
import logo from '../../images/logo.svg';

interface OwnProps { }

// type DispatchProps = {
//     dispatch: Dispatch<any>;
// };

type StateProps = {
    messages: String;
};

type Props = OwnProps;

export function mapStateToProps(state: models.AppState): StateProps {
    return {
        messages: selectors.selectMessages(state)
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        dispatch
    };
}

export class App extends React.Component<Props> {

    componentWillMount() { }

    render() {
        //const { dispatch } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
              </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
              </a>
                </header>
            </div>
        );
    }

}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default App;