import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            lang:'en',
            onLogin: false,             // show/hide login diaolg
            onRegister: false,          // show/hide register dialog
            onMoblieProfile: false, 
            isDrawer: false, 
            isSideNotification: false, 
            isWelcome: true, 
            isVerifyEmail: 0,
            isDepositNow: false, 
            isLogin: false,             // login value
            isSearchDiaolg: false,
            selectedProvider: '',
            isAvatarDiaolg: false,
            haveResetCode: false,
            visitorID: '',
            User: {},                   // user profile
            notification: {},           // notification(type,message)
            promotions: [],             // promotions
            
            history:[],                 // player history
            historyAmount: 0,           // player history count

            providers:[],               // provider list
            balance:{},                 // balance
            paymentGateway:[],          // paymentGateway

            gameListByType:[],          // current game list(type)
            favoriteGameSlugList:[],      // favorite game list
            allGameList:[],             // current game list
            searchGameList:[],             // search game list
            gameAmountByType:0,         // game amount of type
            currentLoaded:0,            // current loaded game amount
            gamePlayMode:2,             // game play mode(fun/play/none)
            currentPlayGameID: 0,    
            gameData:"",                // game data (html/dov)
            pageNumber: 1,              // game list page number when press "Read More" button 
            remainingTime:20,           // remaining time
        };
    },
    mutations: {
        handleSetLanguage(state, payload) {state.lang = payload; },
        handleDrawer(state, payload) { state.isDrawer = payload; },
        handleSideNotification(state, payload) { state.isSideNotification = payload; },
        handleVerifyEmail(state, payload) { state.isVerifyEmail = payload; },
        handleWelcome(state, payload) { state.isWelcome = payload; },
        handleMobileProfile(state, payload) { state.onMoblieProfile = payload; },
        handleLogin(state, payload) { state.isLogin = payload; if(payload === false) state.User = {}; },
        handleOnLogin(state, payload) { state.onLogin = payload; },
        handleOnRegister(state, payload) { state.onRegister = payload; },
        handleOnSearchDialog(state, payload) { state.isSearchDiaolg = payload.a; state.selectedProvider = payload.b; },
        handleOnAvatarDialog(state, payload) { state.isAvatarDiaolg = payload; },
        handleUpdateAvatar(state, payload) { state.User = {...state.User, avatar:payload}; },
        handleResetCode(state, payload) { state.haveResetCode = payload; },
        handleDepositeNow(state, payload) { state.isDepositNow = payload; },
        handleVisitorID(state, payload) { state.visitorID = payload; },

        handleGetUser(state, payload) { state.User = payload; },
        handleNotification(state, payload) { state.notification = payload; },
        handleGetBalance(state, payload) { state.balance = payload; },
        handlePaymentGateway(state, payload) { state.paymentGateway = payload; },

        handleGetProviders(state, payload) { state.providers = payload; },
        handleGetPromotion(state, payload) { state.promotions = payload; },

        handleGetHistory(state, payload) { state.history = payload; },
        handleGetHistoryAccount(state, payload) { state.historyAmount = payload; },

        handleSearchResult(state, payload) { state.searchGameList = payload; },
        handleGetAllGames(state, payload) { state.allGameList = payload; },
        handleGetGamesByType(state, payload) { state.gameListByType = payload; },
        handleFavoriteGameSlugList(state, payload) { state.favoriteGameSlugList = payload; },
        handleGetGamesAmount(state, payload) { state.gameAmountByType = payload; },
        handleCurrentLoaded(state, payload) { state.currentLoaded = payload; },
        handleGetGameData(state, payload) { state.gameData = payload; },
        handleGamePlayMode(state, payload) { state.gamePlayMode = payload; },

        handlePageNumber(state, payload) { state.pageNumber = payload; },
        
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
    // Install the store instance as a plugin
});
