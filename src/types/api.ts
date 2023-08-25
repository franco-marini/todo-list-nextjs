export interface IResponse<D extends any> {
  message: string;
  hasError: boolean;
  data?: D;
  error?: any;
}
