import { Col, Form, Input, Row } from "antd";
import { formItemCol } from "../../../constants";

export default function PersonalForm() {
  return (
    <>
      <Row>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Given Name"
            name="givenName"
            rules={[{ required: true, message: 'Please input your given name.' }]}>
            <Input name="givenName"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Surname"
            name="surname">
            <Input name="surname"></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email.' },
              { type: 'email', message: 'Please input valid email.' }
            ]}>
            <Input name="email"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone.' }]}>
            <Input name="phone"></Input>
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}