import React from 'react';
import { Button, Popconfirm, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteFilled, EditFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../rootReducer';
import { deleteReferral, getReferral, referralState } from '../../features/referral/slice';
import { IReferralObj } from '../../interfaces/referral';

interface TableData {
  key: string;
  givenName: string;
  surname: string;
  email: string;
  phone: string;
  edit: (id: string) => void;
  delete: (id: string) => void;
}

const columns: TableProps<TableData>['columns'] = [
  {
    title: 'Given Name',
    dataIndex: 'givenName',
    key: 'givenName',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',
    responsive: ["md"],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ["lg"],
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
    responsive: ["lg"],
  },
  {
    title: 'Action',
    key: 'action',
    responsive: ["md"],
    render: (_, record: TableData) => (
      <Space size="middle">
        <Button onClick={() => record.edit(record.key)} type="primary" shape="circle" icon={<EditFilled />} />
        <Popconfirm
          title="Delete referral?"
          onConfirm={async () => await record.delete(record.key)}
          description="Are you sure to delete this referral?"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
          <Button type="primary" shape="circle" icon={<DeleteFilled />}/>
        </Popconfirm>
      </Space>
    )
  },
];

export default function ReferralTable() {
  const dispatch = useAppDispatch()
  const state = useAppSelector(referralState)

  const data: TableData[] = state.list.map((item: IReferralObj) => ({
    key: item._id,
    givenName: item.givenName,
    surname: item.surname,
    email: item.email,
    phone: item.phone,
    edit: (id: string) => dispatch(getReferral(id)),
    delete: (id: string) => dispatch(deleteReferral(id))
  })) as TableData[]

  return (
    <Table
      columns={columns}
      dataSource={data} />
  )
};
