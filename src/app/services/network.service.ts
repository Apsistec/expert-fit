import { Injectable, NgModule, OnChanges } from '@angular/core';
import { NetworkStatus, PluginListenerHandle, Plugins } from '@capacitor/core';

const { Network } = Plugins;


@Injectable({
    providedIn: 'root'
  })
  export class NetworkService  {
  networkStatus: NetworkStatus ;
  networkListener: PluginListenerHandle;

  constructor() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status;
      console.log('Network status changed', status);
    });

  }

  async getNetWorkStatus() {
    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus);
  }

  endNetworkListener() {
    if (this.networkListener) {
      this.networkListener.remove();
    }
  }

}
