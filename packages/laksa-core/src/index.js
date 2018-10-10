//
//
//  Copyright
//
//
//

import * as util from 'laksa-utils'
import * as core from 'laksa-core-crypto'
import { Messenger } from 'laksa-core-messenger'
import Transaction from 'laksa-core-transaction'
import HttpProvider from 'laksa-providers-http'
import { Account } from 'laksa-account'
import Contracts from 'laksa-contracts'
import { Wallet } from 'laksa-wallet'
import Zil from 'laksa-zil'

import config from './config'

class Laksa {
  constructor(args) {
    const url = args || config.defaultNodeUrl
    this.util = { ...util, ...core }
    this.config = config
    this.currentProvider = { node: new HttpProvider(url), scilla: new HttpProvider(url) }
    this.messenger = new Messenger(this.currentProvider.node)
    this.zil = new Zil(this.messenger, this.config)

    this.account = new Account(this.messenger)
    this.wallet = new Wallet(this.messenger)
    this.contracts = new Contracts(this.messenger, this.wallet)
  }

  providers = {
    HttpProvider
  }

  Transaction = Transaction

  // library method
  isConnected = async (callback) => {
    const result = await this.zil.isConnected()
    try {
      return callback === undefined ? !(result instanceof Error) : callback(null, true)
    } catch (e) {
      return false
    }
  }

  getLibraryVersion = () => this.config.version

  getDefaultProviderUrl = () => this.config.defaultProviderUrl

  getDefaultAccount = () => {
    if (this.wallet.defaultAccount) {
      return this.wallet.defaultAccount
    }
    return this.config.defaultAccount
  }

  getDefaultBlock = () => this.config.defaultBlock

  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    this.setNodeProvider(provider)
    this.setScillaProvider(provider)
  }

  setNodeProvider = (provider) => {
    const newProvider = new HttpProvider(provider)
    this.currentProvider = { ...this.currentProvider, node: newProvider }
    this.messenger.setProvider(newProvider)
  }

  setScillaProvider = (provider) => {
    const newProvider = new HttpProvider(provider)
    this.currentProvider = { ...this.currentProvider, scilla: newProvider }
    this.messenger.setScillaProvider(newProvider)
  }

  register({ name, pkg }) {
    const pkgObject = {
      get: pkg,
      enumerable: true
    }
    Object.defineProperty(this, name, pkgObject)
  }
}

export default Laksa
