import { AsyncStorage } from 'react-native'

const getCart = async() =>{
    try {
        const value = await AsyncStorage.getItem('@cart');
        if (value !== null) {
            JSON.parse(value)
        }
      } catch (error) {
        return [];
      }
}
export default getCart;