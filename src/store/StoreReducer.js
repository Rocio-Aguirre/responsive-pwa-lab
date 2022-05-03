// const types = {
//     PRODUCT_ADD_TROLLEY: 'PRODUCT_ADD_TROLLEY',
//     PRODUCT_DELETE_TROLLEY: 'PRODUCT_DELETE_TROLLEY'
// }

// const initialStore = {
//     total:0,
//     trolley:[]
// }


// const StoreReducer = (state, action) => {
//     console.log(state);
//     const newProduct = action.payload;
//             switch(action.type) {
//                 case types.PRODUCT_ADD_TROLLEY:{
//                     const isProductExist =  state.trolley.find(product => product.id === newProduct.id)
//                    return isProductExist
//                     ?{
//                         ...state,
//                         trolley: state.trolley.map(product=> product.id === newProduct.id ? {...product, quantity: product.quantity++} : product)

//                     }  :
//                     {
//                         ...state,
//                         trolley: state.trolley.concat({...newProduct, quantity:1}) 
//                     }

//                 }
//                 case types.PRODUCT_DELETE_TROLLEY:
//                     return{
//                         ...state,
//                         trolley: state.trolley.filter(product => product.id !== newProduct)
//                     } 
                            
//                 default:
//                     return state;
//             }
       
// }

// export default StoreReducer
// export {initialStore, types}