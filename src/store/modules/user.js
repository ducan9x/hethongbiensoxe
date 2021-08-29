

const userModule = {
    state:{
        user:[
            {
                active:false
            }
        ]
    },
    getters:{
        active: state => state.user.active
    },
    mutations:{
        GET_ACTIVE(state,active){
            state.user.active = active
        }
    },
    actions:{}
}
export default userModule