import { Injectable } from '@angular/core';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public storage: Storage) {
    console.log('Your storage provider is working here !');
  }
  // set a key/value
  async store(key: string, value: any): Promise<any> {
    try {
      const encryptedValue = btoa(escape(JSON.stringify(value)));
      const result = await this.storage.set(key, encryptedValue);
      console.log('set string in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  // to get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  // set a key/value object
  async storeObject(key: string, object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      console.log('set Object in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
    }
  }
  // get a key/value object
  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        // return JSON.parse(result);
        return JSON.parse(unescape(atob(result.value)));
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  // remove a single key value:
  remove(key: string) {
    this.storage.remove(key);
  }
  //  delete all data from your application:
  clear() {
    this.storage.clear();
  }
}

// export class StorageService {

//   constructor(
//     ) {}

//   // Store the value
//   async store(storageKey: string, value: any) {
//     const encryptedValue = btoa(escape(JSON.stringify(value)));
//     await Storage.set({
//       key: storageKey,
//       value: encryptedValue
//     });
//   }

//   // Get the value
//   async get(storageKey: string) {
//     const ret = await Storage.get({ key: storageKey });
//     return JSON.parse(unescape(atob(ret.value)));
//   }

//   async removeStorageItem(storageKey: string) {
//     await Storage.remove({ key: storageKey });
//   }

//   // Clear storage
//   async clear() {
//     await Storage.clear();
//   }
