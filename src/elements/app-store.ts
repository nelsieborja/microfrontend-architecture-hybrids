import { define, property, render } from "hybrids";

import { TDynamicObject } from "../types/types";
import THybridsElement from "../types/hybrids.types";

const AppStore: THybridsElement<{
  data: TDynamicObject;
}> = {
  data: property({}),
  render: render(() => () => {}, { shadowRoot: false })
};

define("app-store", AppStore);
export default AppStore;

export const getValueFromStore = (store: TDynamicObject, key: string) => {
  return store.data[key];
};

export const pushToStore = (store: TDynamicObject, value: Object) => {
  store.data = {
    ...store.data,
    ...value
  };
};
