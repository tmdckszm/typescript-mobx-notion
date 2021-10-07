import { counter } from "./store/counter.ts";
import { market } from "./store/market";

const useStore = () => {
  return { counter, market };
};

export default useStore;
