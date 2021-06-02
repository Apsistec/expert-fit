import { Injectable } from '@angular/core';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;
import { Storage } from '@ionic/storage';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public storage: Storage, private messageService: MessageService) {
    console.log('Your storage provider is working here !');
  }

  // set a key/value
  async store(key: string, value: any): Promise<any> {
    try {
      const encryptedValue = btoa(escape(value));
      const result = await this.storage.set(key, encryptedValue);
      console.log('set string in storage: ' + result);
    } catch (error) {
      this.messageService.errorAlert(error);
    }
  }

  // to get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return unescape(atob(result.value));
      }
      return null;
    } catch (error) {
      this.messageService.errorAlert(error);
      return null;
    }
  }

  // set a key/value object
  async storeObject(key: string, value) {
    try {
      const encryptedValue = btoa(escape(JSON.stringify(value)));
      await this.storage.set(key, encryptedValue);
    } catch (error) {
      this.messageService.errorAlert(error);
    }
  }

  // get a key/value object
  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return JSON.parse(unescape(atob(result.value)));
      }
      return null;
    } catch (error) {
      this.messageService.errorAlert(error);
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
