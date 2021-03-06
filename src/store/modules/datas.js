// import axios from "axios";
import {v4 as uuidv4 } from 'uuid'
const datasModule = {
    state:{
        datas:[
              {
                id:1,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'XMT-000025',
                vehicle:'oto'
              },
              {
                id:2,
                expired:'30/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn B',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'29-V7-000025',
                vehicle:'xe máy'
              },
              {
                id:3,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 9,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'00025',
                vehicle:'xe máy'
              },
              {
                id:4,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 9,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'ASC-000025',
                vehicle:'oto',
              },
              {
                id:5,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 9,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'SCKS-0099',
                vehicle:'xe đạp'
              },
              {
                id:6,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 10,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'215-V-015',
                vehicle:'xe máy'
              },
              {
                id:7,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'20.000',
                license_plates:'SF-0025',
                vehicle:'oto'
              },
              {
                id:8,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'BGH-230025',
                vehicle:'oto',
              },
              {
                id:9,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'T-002225',
                vehicle:'xe đạp'
              },
              {
                id:10,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'29-RT025',
                vehicle:'xe máy'
              },
              {
                id:11,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'00USD025',
                vehicle:'xe máy'
              },
              {
                id:12,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'9/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 11,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:13,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'10/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 12,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'5.000',
                license_plates:'T-002225',
                vehicle:'xe đạp'
              },
              {
                id:14,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'10/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 12,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'29-RT025',
                vehicle:'xe máy'
              },
              {
                id:15,
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'10/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 12,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'10.000',
                license_plates:'00USD025',
                vehicle:'xe máy'
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'10/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 13,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'CB025',
                vehicle:'xe đạp',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'5.000',
                license_plates:'CBSAD025',
                vehicle:'xe đạp',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'D025',
                vehicle:'xe đạp',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'10/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'11/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 14,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'12/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe ra',
                card:'5.000',
                license_plates:'CB025',
                vehicle:'xe đạp',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'12/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'20.000',
                license_plates:'CBG-340025',
                vehicle:'oto',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'12/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'CBSAD025',
                vehicle:'xe đạp',
              },
              {
                id:uuidv4(),
                expired:'31/5/2021',
                address:'GH4-506',
                owner:'Nguyễn Văn A',
                datetime:'17:30:27 9/5/2021',
                date:'12/5/2021',
                imgVehicle:'assets/img/bsvao.PNG',
                imgVehicleOverview:'assets/img/tcvao.PNG',
                time: 15,
                imgLicensePlates:'assets/img/bsx.PNG',
                status:'Xe vào',
                card:'5.000',
                license_plates:'D025',
                vehicle:'xe đạp',
              }
        ]
    },
    getters:{
        datas: state => state.datas,
        laneIn: state => state.datas.filter(data => data.status == 'Xe vào'),
        laneOut: state => state.datas.filter(data => data.status == 'Xe ra')
    },
    mutations:{
      SET_DATA(state,datas){
        state.datas = datas
      }
    },
    actions:{
      //  async getDatas({commit}){
      //    try {
      //      await axios.get('https://api-ql-bai-gui-xe.herokuapp.com/api/statistical',
      //      {
      //       headers: {
      //       'Authorization': 'Bearer' + sessionStorage.getItem('token')
      //     }
      //   })
      //      .then((res) => {
      //           console.log(res.data.data,"hihi",commit)
      //           // commit('SET_DATA',res.data)
      //       }).catch((e) => {
      //           alert(e.response.data.message);
      //       }); 
           
      //    } catch (e) {
      //     alert(e.response.data.message);
      //    }
      //  }
    },
    
}

export default datasModule