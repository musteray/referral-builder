export interface IReferralObj {
  _id?: string;
  givenName?: string;
  surname?: string;
  email?: string;
  phone?: string;
  homeName?: string;
  street?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country?: string;
}

export interface IReferralState {
  list: Array<IReferralObj>;
  selected: IReferralObj;
  status: 'idle' | 'loading' | 'failed';
  state: 'add' | 'edit';
}