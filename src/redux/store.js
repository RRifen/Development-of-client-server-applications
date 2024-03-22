import {configureStore} from '@reduxjs/toolkit'
import termsOfUseReducer from './slices/termsOfUseSlice'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'termsOfUse',
    storage,
}

const persistedTermsOfUseReducer = persistReducer(persistConfig, termsOfUseReducer)

export default () => {
    let store = configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }),
        reducer: {
            termsOfUse: persistedTermsOfUseReducer
        },
    })
    let persistor = persistStore(store)
    return {store, persistor}
}
