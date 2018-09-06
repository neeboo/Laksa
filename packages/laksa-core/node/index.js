(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('laksa-utils'), require('laksa-request'), require('laksa-zil')) :
  typeof define === 'function' && define.amd ? define(['laksa-utils', 'laksa-request', 'laksa-zil'], factory) :
  (global.Laksa = factory(global.util,global.laksaRequest,global.Zil));
}(this, (function (util,laksaRequest,Zil) { 'use strict';

  Zil = Zil && Zil.hasOwnProperty('default') ? Zil['default'] : Zil;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var config = {
    version: '0.0.1',
    mode: 'sync',
    defaultProviderUrl: 'http://localhost:4200',
    defaultBlock: 'latest',
    defaultAccount: undefined
  };

  class Laksa {
    constructor(args) {
      _defineProperty(this, "providers", {
        HttpProvider: laksaRequest.HttpProvider
      });

      _defineProperty(this, "config", config);

      _defineProperty(this, "isConnected", async () => {
        const result = await this.zil.isConnected();

        try {
          return !(result instanceof Error);
        } catch (e) {
          return false;
        }
      });

      _defineProperty(this, "getLibraryVersion", () => this.config.version);

      _defineProperty(this, "getDefaultProviderUrl", () => this.config.defaultProviderUrl);

      _defineProperty(this, "getDefaultAccount", () => this.config.defaultAccount);

      _defineProperty(this, "getDefaultBlock", () => this.config.defaultBlock);

      _defineProperty(this, "getProvider", () => this.currentProvider);

      _defineProperty(this, "setProvider", provider => {
        this.currentProvider = new laksaRequest.HttpProvider(provider);
        this.messanger.setProvider(this.currentProvider);
      });

      // validateArgs(args, {}, { nodeUrl: [util.isUrl] })
      const url = args || config.defaultNodeUrl; //

      this.util = util; //

      this.currentProvider = new laksaRequest.HttpProvider(url);
      this.messanger = new laksaRequest.Messanger(this.currentProvider); //

      this.zil = new Zil(this);
    }

  }

  return Laksa;

})));