import { TDynamicFunction, TDynamicObject } from "./types";

type THybridsElement<
  T =
    | {}
    | { [K: string]: string | number | IHybridsDescriptors<THybridsElement> }
> = T & {
  store?: TDynamicObject;
  render?: (host?: T & Pick<THybridsElement, "store">) => any;
};
export default THybridsElement;

export interface IHybridsDescriptors<H> {
  get?(host: H, lastValue?: any): any;
  set?(host: H, value?: any, lastValue?: any): any;
  connect?(host: H, key?: keyof H, invalidate?: TDynamicFunction): any;
  observe?(host: H, value?: any, lastValue?: any): any;
}

export type THybridsFactory = (
  connectFN: (host: THybridsElement) => any,
  getFN: (host: THybridsElement) => any,
  key: string
) => IHybridsDescriptors<THybridsElement>;
