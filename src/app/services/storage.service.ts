import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() {}

  // Encrypt and Store the Object keys and values by primary key
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the unencrypted object's key(s) and value(s) by the primary key
  async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if (ret.value) {
      return JSON.parse(unescape(atob(ret.value)));
    } else {
      return false;
    }
  }

  async setItem(newKey: string, newValue: any) {
   await Storage.set({key: newKey, value: newValue});
  }

  async keys() {
    const keys = await Storage.keys();
  }

  async clear() {
    await Storage.clear();
  }
}
