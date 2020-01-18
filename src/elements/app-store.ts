import { define, html, property, render } from "hybrids";
import { Hybrids } from "hybrids";

interface AppStore extends HTMLElement {
  data: {
    cartCount: number;
  };
}
const AppStore: Hybrids<AppStore> = {
  data: property({ cartCount: 0 })
};

define("app-store", AppStore);
export default AppStore;

export const getValueFromStore = (store: AppStore, key: string) => {
  return store.data[key];
};

export const pushToStore = (store: AppStore, value: Object) => {
  store.data = {
    ...store.data,
    ...value
  };
};
