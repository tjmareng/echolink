import React from "react";
import { Field, reduxForm } from "redux-form";
import { Message, Button, Segment, FormTextArea, Form } from "semantic-ui-react";
import { compose } from "redux";
import { connect } from "react-redux";

interface OwnProps { }

type StateProps = {};

type Props = OwnProps & StateProps;

export function mapStateToProps(state: any): StateProps {
    return {

    };
}

export class NewUserForm extends React.Component<Props> {
    renderInput = (field: any) => (
        <Form.Input
            {...field.input}
            required
            label={field.label}
            placeholder={field.placeholder}
            rows={field.rows} />
    );

    renderSelect = (field: any) => (
        <Form.Select
            label={field.label}
            name={field.input.name}
            onChange={(e, { value }) => field.input.onChange(value)}
            options={field.options}
            placeholder={field.placeholder}
            value={field.input.value}
        />
    );

    renderTextArea = (field: any) => (
        <Form.TextArea
            {...field.input}
            required
            label={field.label}
            placeholder={field.placeholder}
            rows={field.rows} />
    );


    close = () => this.setState({ open: false });

    render() {
        //const { dispatch } = this.props;

        return (
            <Form size={"large"}>



                <Field
                    component={this.renderInput}
                    label="Display Name"
                    name="Display Name"
                    placeholder="Display Name"
                    rows={1}
                />
                <Field
                    component={this.renderInput}
                    label="Room"
                    name="Room Name"
                    placeholder="Room Name"
                    rows={1}
                />

                <button
                //  onClick={()=>{
                //     dispatch(actions.addUser())
                // }}
                >Join</button>
            </Form>
        );
    }
}

const withConnect = connect(mapStateToProps);

const withForm = reduxForm({
    form: "user"
});

const composed = compose(
    withForm,
    withConnect
)(NewUserForm);

export default composed as React.ComponentClass<OwnProps>;