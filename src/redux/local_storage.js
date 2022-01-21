import AsyncStorage from '@react-native-async-storage/async-storage';
import {enablePromise, openDatabase} from 'react-native-sqlite-storage';

const getDBConnection = async () => {
  return openDatabase({name: 'user.db', location: 'default'});
};

const tableName = 'userTABLE';
const tokenColumn = 'Token';

export const createTable = async () => {
  try {
    enablePromise(true);
    var db = await getDBConnection();
    // create table if not exists
    const query = `CREATE TABLE ${tableName}(
        Token varchar(255)
      );`;
    console.log('query is ', query);
    await db.executeSql(query);
  } catch (e) {
    console.log(e.toString());
  }
};

export const storeData = async params => {
  try {
    createTable();
    enablePromise(true);
    var db = await getDBConnection();
    const insertQuery = `INSERT INTO ${tableName} (Token) VALUES (${params.value});`;
    console.log('query is ', insertQuery);
    db.executeSql(insertQuery);
    return;
  } catch (e) {
    console.log(e.toString());
  }
};

export const getData = async () => {
  enablePromise(true);
  var db = await getDBConnection();
  try {
    const results = await db.executeSql(`SELECT Token FROM ${tableName};`);
    console.log('results is ', results);
    if (results.length > 0) {
      results.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          console.log('token is ', results[index]);
        }
      });
      return results[results.length - 1];
    }
  } catch (error) {
    console.error('error is ', error);
    throw Error('Failed to get token !!!');
  }
};

export const clearData = async () => {
  enablePromise(true);
  var db = await getDBConnection();
  await db.executeSql(`DELETE FROM ${tableName};`);
  await db.executeSql(`DROP TABLE ${tableName};`);
  console.log("data cleared ");
};

// export const storeData = async params => {
//   try {
    // return AsyncStorage.setItem(params.key, params.value);
//   } catch (e) {
//     // saving error
//   }
// };
// export const getData = async key => {
//   try {
//     return AsyncStorage.getItem(key);
//   } catch (e) {
//     // saving error
//   }
// };
// export const clearData = async () => {
//   try {
//     return AsyncStorage.clear();
//   } catch (e) {
//     // saving error
//   }
// };
