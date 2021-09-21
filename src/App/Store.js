import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../Resources/cryptoApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },

})