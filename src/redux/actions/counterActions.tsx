export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export interface IMenuStatusReducerAction {
  type: typeof OPEN | typeof CLOSE;
}
