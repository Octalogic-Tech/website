export interface ISocial {
  name: string;
  link: string;
  iconUrl: string;
}

export interface IService {
  title: string;
  desc: string;
  actionLink: string;
  illustration: any;
}

export interface IBenefit {
  title: string;
  desc: string;
  illustration: any;
}

export interface ITechnology {
  name: string;
  iconUrl: string;
  link: string;
}

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ICloufdlareVerifyResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  "error-codes": string[];
  action: string;
  cdata: string;
}
