import { Col, Row } from "antd";

import Form from "./form";
import Table from "./table";
import { useEffect } from "react";
import { useAppDispatch } from "../../rootReducer";
import { fetchReferrals } from "../../features/referral/slice";

export default function Referral() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // fetch list of referrals
    dispatch(fetchReferrals())
  }, [])

  return (
    <Row>
      <Col style={{ paddingRight: 8 }} span={12} xs={24} sm={24} md={12} xl={12}>
        <Form></Form>
      </Col>
      <Col span={12} xs={24} sm={24} md={12} xl={12}>
        <Table></Table>
      </Col>
    </Row>
  );
};
