// import React, { createContext, useReducer } from 'react'
// import StoreReducer, {initialStore} from './StoreReducer';

// const StoreContext = createContext();

// const StoreProvider = ({children}) => {
//     const [store, dispatch] = useReducer(StoreReducer, initialStore);
//     return (
//         <div>
//             <StoreContext.Provider value={[store, dispatch]}>
//                 {children}
//             </StoreContext.Provider>
//         </div>
//     )
// }

// export {StoreContext}
// export default StoreProvider