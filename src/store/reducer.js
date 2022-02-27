export default function reducer(state, action) {
    switch (action.type) {
      case 'setProducts':
        return {
            ...state,
            products: action.payload
        };
    case 'setLoading':
        return {
            ...state,
            isLoading: action.payload
        };
    case 'addToCart': {
        const isExist = state.cart.find(item => item.product.id === action.payload.productId);
        
        if (isExist) {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.product.id === action.payload.productId) {
                        return {
                            ...item,
                            quantity: item.quantity + parseInt(action.payload.quantity)
                        }
                    }

                    return item;
                })
            };
        }

        return {
            ...state,
            cart: [...state.cart, {
                    product: state.products.find(product => product.id === action.payload.productId),
                    quantity: action.payload.quantity
                }
            ]
        };
    }

    case 'removeFromCart':
        return {
            ...state,
            cart: state.cart.filter(item => item.product.id !== action.payload)
        };

    case 'removeFilter':
        return {
            ...state,
            filters: state.filters.filter(f => f.id !== action.payload)
        }

    case 'addFilter': {
        return {
            ...state,
            filters: [...state.filters, action.payload]
        }
    }
    default:
        throw new Error();
    }
  }