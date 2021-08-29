import axios from "axios";
const personelsModule = {
    state:{
        personels:[],
        edit:[]
    },
    getters:{
        personels: state => state.personels,
        edit: state => state.edit
    },
    mutations:{
        DELETE_PERSON(state,personId){
            state.personels = state.personels.filter(person => person.username !== personId)
        },
        GET_PERSON(state,personList){
            state.personels = personList
        },
        ADD_PERSON(state, newPerson){
            state.personels.push(newPerson)
        },
        EDIT_PERSON(state, personId){
            state.edit = state.personels.filter(person => person.username == personId)
        },
        SAVE_PERSON(state,newPerson){
            var pos = state.personels.findIndex((person) =>{
                return person.username == newPerson.username;
            });
            state.personels.splice(pos,1,newPerson)
        }
    },
    actions:{
        async getPerson({commit}){
            try {
                await axios.get(`https://api-ql-bai-gui-xe.herokuapp.com/api/user`,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then((res) => {
                    commit('GET_PERSON',res.data.data)
                }).catch((e) => {
                    alert(e.response.data.message);
                });
               
            } catch (e) {
                alert(e.response.data.message);
            }
            
        },
        async deletePerson({commit},personId){
            try {
                await axios.delete(`https://api-ql-bai-gui-xe.herokuapp.com/api/user/${personId}`,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('DELETE_PERSON',personId)
                }).catch((e) => {
                    alert(e.response.data.message);
                }); 
            } catch (e) {
                alert(e.response.data.message);
            }
           
        },
        async addPerson({commit},newPerson){
            try {
                await axios.post(`https://api-ql-bai-gui-xe.herokuapp.com/api/user`,
                {
                    full_name: newPerson.full_name,
                    username: newPerson.username,
                    password: newPerson.password,
                    address: newPerson.address,
                    phone: newPerson.phone,
                    mail: newPerson.mail,
                }
                ,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('ADD_PERSON',newPerson)
                }).catch((e) => {
                    alert(e.response.data.message);
                });
                
               
            } catch (e) {
                alert(e.response.data.message);
            }
            
        },
        async savePerson({commit},newPerson){
            try {
                await axios.post(`https://api-ql-bai-gui-xe.herokuapp.com/api/user`,
                {
                    full_name: newPerson.full_name,
                    username: newPerson.username,
                    password: newPerson.password,
                    address: newPerson.address,
                    phone: newPerson.phone,
                    mail: newPerson.mail,
                }
                ,
                {
                    headers: {
                    'Authorization': 'Bearer' + sessionStorage.getItem('token')
                  }
                }).then(() => {
                    commit('SAVE_PERSON',newPerson)
                }).catch((e) => {
                    alert(e.response.data.message);
                });
                
               
            } catch (e) {
                alert(e.response.data.message);
            }
        }
    }
}
export default personelsModule