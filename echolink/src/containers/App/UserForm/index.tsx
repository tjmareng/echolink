import React from "react";
import { connect } from "react-redux";
import { Modal, Button, Segment, Message } from "semantic-ui-react";
import NewUserForm from "./form";

interface OwnProps {
    displayName: String;
    roomName: String;
}

const mapStateToProps = (state: any) => {
    // return state.form.user
    //     ? {
    //         values: state.form.user.values,
    //         submitSucceeded: state.form.user.submitSucceeded
    //     }
    //     : {
    //         values: {
    //             displayName: '',
    //             roomName: ''
    //         }
    //     };
    return {};
};

type Props = OwnProps;

export class UserForm extends React.Component<Props> {
    state = {

    };

    render() {
        return (
            <Segment basic textAlign="center" vertical>
                <NewUserForm />
                {/* Displays Form Data */}
                <Message>
                    <Message.Header>Form data:</Message.Header>
                    <pre>{JSON.stringify(this.props, null, 2)}</pre>
                </Message>
            </Segment>

        );
    }
}

export default connect(mapStateToProps)(NewUserForm);
//export default UserForm;