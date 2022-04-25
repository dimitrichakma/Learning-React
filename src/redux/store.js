import { createStore } from "redux";
import { Reducer } from "./reducer";

const MyStore = createStore(Reducer)

export default MyStore