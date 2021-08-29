import { createLogger, createStore } from "vuex";
import datasModule from "./modules/datas";
import customerModule from "./modules/customer";
import personelsModule from './modules/personnel';
import userModule from "./modules/user";
const store = createStore({
    plugins:[createLogger()],
    modules:{
        listData: datasModule,
        listCustomer: customerModule,
        listPersonel: personelsModule,
        user:userModule
    } 
})
export default store