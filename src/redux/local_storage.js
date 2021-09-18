import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (params) => {
    try {
      return AsyncStorage.setItem(params.key, params.value);
    } catch (e) {
      // saving error
    }
}
export const getData  = async (key) => {
    try {
      return AsyncStorage.getItem(key);
    } catch (e) {
      // saving error
    }
}
export const clearData = async () => {
    try {
      return AsyncStorage.clear();
    } catch (e) {
      // saving error
    }
}