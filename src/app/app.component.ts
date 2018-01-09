import { Component, OnInit } from '@angular/core';

import * as contract from 'truffle-contract'
import * as cates_artifact from '../assets/contracts/CatesToken.json'

declare var web3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public walletAddresses = web3.eth.accounts;
  public wallets = [];

  public CatesToken;

  constructor() {

  }

  ngOnInit() {
    this.CatesToken = contract(cates_artifact);
    this.CatesToken.setProvider(web3.currentProvider);
    this.getBalances();
    console.log(web3);
  }

  getBalances() {
    this.walletAddresses.forEach((wallet, index) => {
      let balance = web3.fromWei(web3.eth.getBalance(wallet).toNumber());
      this.CatesToken.deployed().then((instance) => {
        return instance.balanceOf(wallet);
      })
      .then((value) => {
        let tokens = value.toNumber() / 10000000;
        if (!this.wallets[index]) {
          this.wallets[index] = {};
        }
        this.wallets[index]['address'] = wallet;
        this.wallets[index]['eth'] = balance;
        this.wallets[index]['ct'] = tokens;
      });
    });
  }

  sendCT(from, to, amount) {
    amount = amount * 10000000;

    this.CatesToken.deployed()
    .then((instance) => {
      console.log(instance);
      return instance.transfer(
        to,
        amount,
        {
          from: from
        }
      )
    })
    .then((result) => {
      this.getBalances();
    })
  }

  sendETH(from, to, amount) {
    web3.eth.sendTransaction({
      from: from,
      to: to,
      value: web3.toWei(amount, "ether")
    })
    this.getBalances();
  }

}
