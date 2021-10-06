import { counter } from "./store/counter";
import { market } from "./store/market";

const useStore = () => {
  return { counter, market };
};

export default useStore;
