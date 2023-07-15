import { log } from 'console';
import {AxiosWithAuth} from '~~/utils/Axios';

export const getProfile = (store, router) => {
    AxiosWithAuth('get','/api/player/getProfile',store, router)
    .then(res => {
        store.commit('handleGetUser', res.data.Player);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const getGameHistory = (pagenum, store, router) => {
    AxiosWithAuth('get',`/api/player/getGamePlayHistory?page=${pagenum}`,store, router)
    .then(res => {
        let result = res.data.gamePlayHistory.data;
        if(pagenum>1){
            result = [...store.state.history, ...result];
        }
        store.commit('handleGetHistoryAccount', res.data.gamePlayHistory.total)
        store.commit('handleGetHistory', result);
    })
    .catch(err=>{
        if(err.response)
            store.commit('handleNotification',{type:'Error',message:err.response.data.message});
        else
            store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    });
}

export const updateAvatar = (data,store, router) => {
    store.commit('handleUpdateAvatar', data);
    // AxiosWithAuth('Post',`/api/player/getGamePlayHistory`,store, router, data)
    // .then(res => {
    //     store.commit('handleNotification',{type:'Success',message: "Profile Image Updated Successfully!"});
    //     store.commit('handleUpdateAvatar', data);
    // })
    // .catch(err=>{
    //     if(err.response)
    //         store.commit('handleNotification',{type:'Error',message:err.response.data.message});
    //     else
    //         store.commit('handleNotification',{type:'Error',message: "Network Connection Error."});
    // });
}
