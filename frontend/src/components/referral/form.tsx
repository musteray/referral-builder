import { Button, Card, Col, Divider, Form, Row } from "antd";
import { useEffect } from "react";
import AddressForm from "./form/address";
import PersonalForm from "./form/personal";
import { formItemLayout } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../rootReducer";
import { createReferral, referralState, resetFormState, updateReferral } from "../../features/referral/slice";
import { IReferralObj } from "../../interfaces/referral";

export default function ReferralForm() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch()
  const state = useAppSelector(referralState)

  const onSubmit = (data: IReferralObj) => {
    if (state.state === 'add') {
      dispatch(createReferral(data))

      return form.resetFields();
    }

    dispatch(updateReferral(data))
  }

  useEffect(() => {
    form.setFieldsValue(state.selected)
  }, [state.selected])

  return (
    <Card style={{ marginBottom: 15 }}>
      <h1>Referral Builder</h1>
      <Form
        {...formItemLayout}
        initialValues={state.selected}
        layout="vertical"
        form={form}
        onFinish={onSubmit}>
        {/* Personal Details Divider */}
        <Divider style={{ marginTop: 10 }} orientation="left">Personal Details</Divider>
        {/* Personal Details Form */}
        <PersonalForm></PersonalForm>
        {/* Address Divider */}
        <Divider style={{ marginTop: 10 }} orientation="left">Address</Divider>
        {/* Address Form */}
        <AddressForm></AddressForm>
        {/* Button */}
        <Row>
          <Col span={12}>
            <Button>UPLOAD AVATAR</Button>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit">
              { state.state === 'add' ? 'CREATE' : 'EDIT' } REFERRAL
            </Button>
            <span style={{ marginRight: 10 }}></span>
            {state.state === 'edit' && <Button onClick={() => dispatch(resetFormState())} type="text">Exit</Button>}
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
