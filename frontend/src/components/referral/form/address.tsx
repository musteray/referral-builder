import { Col, Form, Input, Row } from "antd";
import { formItemCol } from "../../../constants";

export default function addressForm() {
  return (
    <>
      <Row>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Home Name or #"
            name="homeName">
            <Input name="homeName"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Street"
            name="street">
            <Input name="street"></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Suburb"
            name="suburb">
            <Input name="suburb"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="State"
            name="state">
            <Input name="State"></Input>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Postcode"
            name="postcode">
            <Input name="postcode"></Input>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            {...formItemCol}
            label="Country"
            name="country">
            <Input name="country"></Input>
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}