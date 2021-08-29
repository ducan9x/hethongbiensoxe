import axios from "axios";
const customerModule = {
    state:{
        customers:[],
        edit:[]
    },
    getters:{
        customers: state => state.customers,
        edit: state => state.edit
    },
    actions:{
        async getData({commit}){
            try {
                await axios.get(`https://api-ql-bai-gui-xe.herokuapp.com/api/signup-month-ticket`,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then((res) => {
                    commit('GET_DATA',res.data.data)
                    console.log(res.data.data,"dt")
                }).catch((e) => {
                    alert(e.response.data.message);
                });
               
            } catch (e) {
                alert(e.response.data.message);
            }
            
        },
        async addCustomer({commit},newCustomer){
            try {
                await axios.post(`https://api-ql-bai-gui-xe.herokuapp.com/api/signup-month-ticket`,
                {
                    color: newCustomer.color,
                    customer_name:newCustomer.customer_name,
                    type_transport:newCustomer.type_transport,
                    type_ticket:newCustomer.type_ticket,
                    license_plates:newCustomer.license_plates
                }
                ,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('ADD_CUSTOMER',newCustomer)
                }).catch((e) => {
                    alert(e.response.data.message);
                });
                
               
            } catch (e) {
                alert(e.response.data.message);
            }
            
        },
        async deleteCustomer({commit},CustomerId){
            try {
                await axios.delete(`https://api-ql-bai-gui-xe.herokuapp.com/api/signup-month-ticket/${CustomerId}`,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('DELETE_CUSTOMER',CustomerId)
                }).catch((e) => {
                    alert(e.response.data.message);
                }); 
            } catch (e) {
                alert(e.response.data.message);
            }
           
        },
        async saveCustomer({commit},newCustomer){
            try {
                await axios.post(`https://api-ql-bai-gui-xe.herokuapp.com/api/signup-month-ticket`,
                {
                    color: newCustomer.color,
                    customer_name:newCustomer.customer_name,
                    type_transport:newCustomer.type_transport,
                    type_ticket:newCustomer.type_ticket,
                    license_plates:newCustomer.license_plates
                }
                ,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('SAVE_CUSTOMER',newCustomer)
                }).catch((e) => {
                    alert(e.response.data.message);
                });
                
               
            } catch (e) {
                alert(e.response.data.message);
            }
        }
    },
    mutations:{
        GET_DATA(state,data){
            state.customers = data
        },
        ADD_CUSTOMER(state,newCustomer){
            state.customers.push(newCustomer)
        },
        EDIT_CUSTOMER(state,customerId){
            state.edit = state.customers.filter(customer => customer.id == customerId)
        },
        SAVE_CUSTOMER(state,newcustomer){
            var pos = state.customers.findIndex((customer) =>{
                return customer.id == newcustomer.id;
            });
            state.customers.splice(pos,1,newcustomer)
        },
        DELETE_CUSTOMER(state,customerId){
            state.customers = state.customers.filter(customer => customer.id !== customerId)
        },
    }
}
export default customerModule