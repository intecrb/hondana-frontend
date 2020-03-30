export const AUTHENTICATE = "AUTHENTICATE";
export const SIGN_OUT = "SIGN_OUT";

export interface IAuthenticateAction {
  type: typeof AUTHENTICATE | typeof SIGN_OUT;
}
