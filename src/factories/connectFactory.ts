import { Descriptor } from "hybrids";

import { TRootState } from "../store";
import { getState, subscribe } from "../store";

type Connect = (
  mapState: (state: TRootState) => any
) => Descriptor<HTMLElement>;

const connect: Connect = mapState => ({
  get: mapState ? () => mapState(getState()) : () => getState(),
  connect: (host, key, invalidate) => subscribe(invalidate)
});

export default connect;
