export default
{
  "contractName": "CatesToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526040805190810160405280600b81526020017f436174657320546f6b656e000000000000000000000000000000000000000000815250600390805190602001906200005192919062000111565b506040805190810160405280600281526020017f4354000000000000000000000000000000000000000000000000000000000000815250600490805190602001906200009f92919062000111565b506008600555662386f26fc100006006553415620000bc57600080fd5b600654600081905550600654600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620001c0565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200015457805160ff191683800117855562000185565b8280016001018555821562000185579182015b828111156200018457825182559160200191906001019062000167565b5b50905062000194919062000198565b5090565b620001bd91905b80821115620001b95760008160009055506001016200019f565b5090565b90565b6112d380620001d06000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf578063095ea7b31461014d57806318160ddd146101a757806323b872dd146101d05780632ff2e9dc14610249578063313ce56714610272578063661884631461029b57806370a08231146102f557806395d89b4114610342578063a9059cbb146103d0578063d73dd6231461042a578063dd62ed3e14610484575b600080fd5b34156100ca57600080fd5b6100d26104f0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101125780820151818401526020810190506100f7565b50505050905090810190601f16801561013f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015857600080fd5b61018d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061058e565b604051808215151515815260200191505060405180910390f35b34156101b257600080fd5b6101ba610680565b6040518082815260200191505060405180910390f35b34156101db57600080fd5b61022f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610686565b604051808215151515815260200191505060405180910390f35b341561025457600080fd5b61025c610a45565b6040518082815260200191505060405180910390f35b341561027d57600080fd5b610285610a4b565b6040518082815260200191505060405180910390f35b34156102a657600080fd5b6102db600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a51565b604051808215151515815260200191505060405180910390f35b341561030057600080fd5b61032c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ce2565b6040518082815260200191505060405180910390f35b341561034d57600080fd5b610355610d2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039557808201518184015260208101905061037a565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dc9565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b61046a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fed565b604051808215151515815260200191505060405180910390f35b341561048f57600080fd5b6104da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111e9565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106c357600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561071157600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561079c57600080fd5b6107ee82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061088382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061095582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b60055481565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610b62576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bf6565b610b75838261127090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dc15780601f10610d9657610100808354040283529160200191610dc1565b820191906000526020600020905b815481529060010190602001808311610da457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e0657600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e5457600080fd5b610ea682600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f3b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061107e82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115151561127e57fe5b818303905092915050565b600080828401905083811015151561129d57fe5b80915050929150505600a165627a7a7230582079557b4b6722cbe7a245a29ff02a041f372db37c3b1cea232230a1d256aed2e50029",
  "deployedBytecode": "0x6060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bf578063095ea7b31461014d57806318160ddd146101a757806323b872dd146101d05780632ff2e9dc14610249578063313ce56714610272578063661884631461029b57806370a08231146102f557806395d89b4114610342578063a9059cbb146103d0578063d73dd6231461042a578063dd62ed3e14610484575b600080fd5b34156100ca57600080fd5b6100d26104f0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101125780820151818401526020810190506100f7565b50505050905090810190601f16801561013f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015857600080fd5b61018d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061058e565b604051808215151515815260200191505060405180910390f35b34156101b257600080fd5b6101ba610680565b6040518082815260200191505060405180910390f35b34156101db57600080fd5b61022f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610686565b604051808215151515815260200191505060405180910390f35b341561025457600080fd5b61025c610a45565b6040518082815260200191505060405180910390f35b341561027d57600080fd5b610285610a4b565b6040518082815260200191505060405180910390f35b34156102a657600080fd5b6102db600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a51565b604051808215151515815260200191505060405180910390f35b341561030057600080fd5b61032c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ce2565b6040518082815260200191505060405180910390f35b341561034d57600080fd5b610355610d2b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039557808201518184015260208101905061037a565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610dc9565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b61046a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fed565b604051808215151515815260200191505060405180910390f35b341561048f57600080fd5b6104da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506111e9565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156106c357600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561071157600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561079c57600080fd5b6107ee82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061088382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061095582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b60055481565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610b62576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610bf6565b610b75838261127090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dc15780601f10610d9657610100808354040283529160200191610dc1565b820191906000526020600020905b815481529060010190602001808311610da457829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610e0657600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610e5457600080fd5b610ea682600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461127090919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f3b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061107e82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461128990919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115151561127e57fe5b818303905092915050565b600080828401905083811015151561129d57fe5b80915050929150505600a165627a7a7230582079557b4b6722cbe7a245a29ff02a041f372db37c3b1cea232230a1d256aed2e50029",
  "sourceMap": "89:304:0:-;;;131:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;169:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;223:1;200:24;;257:17;228:46;;279:111;;;;;;;;328:14;;314:11;:28;;;;371:14;;348:8;:20;357:10;348:20;;;;;;;;;;;;;;;:37;;;;89:304;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "89:304:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1799:183:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;179:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;737:439:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;228:46:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;200:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3603:398:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1013:107:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;169:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;432:379:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2884:257:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2301:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;131:34:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1799:183:7:-;1866:4;1910:6;1878:7;:19;1886:10;1878:19;;;;;;;;;;;;;;;:29;1898:8;1878:29;;;;;;;;;;;;;;;:38;;;;1943:8;1922:38;;1931:10;1922:38;;;1953:6;1922:38;;;;;;;;;;;;;;;;;;1973:4;1966:11;;1799:183;;;;:::o;179:26:5:-;;;;:::o;737:439:7:-;819:4;854:1;839:17;;:3;:17;;;;831:26;;;;;;;;881:8;:15;890:5;881:15;;;;;;;;;;;;;;;;871:6;:25;;863:34;;;;;;;;921:7;:14;929:5;921:14;;;;;;;;;;;;;;;:26;936:10;921:26;;;;;;;;;;;;;;;;911:6;:36;;903:45;;;;;;;;973:27;993:6;973:8;:15;982:5;973:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;955:8;:15;964:5;955:15;;;;;;;;;;;;;;;:45;;;;1022:25;1040:6;1022:8;:13;1031:3;1022:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1006:8;:13;1015:3;1006:13;;;;;;;;;;;;;;;:41;;;;1082:38;1113:6;1082:7;:14;1090:5;1082:14;;;;;;;;;;;;;;;:26;1097:10;1082:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1053:7;:14;1061:5;1053:14;;;;;;;;;;;;;;;:26;1068:10;1053:26;;;;;;;;;;;;;;;:67;;;;1142:3;1126:28;;1135:5;1126:28;;;1147:6;1126:28;;;;;;;;;;;;;;;;;;1167:4;1160:11;;737:439;;;;;:::o;228:46:0:-;;;;:::o;200:24::-;;;;:::o;3603:398:7:-;3686:4;3698:13;3714:7;:19;3722:10;3714:19;;;;;;;;;;;;;;;:29;3734:8;3714:29;;;;;;;;;;;;;;;;3698:45;;3772:8;3753:16;:27;3749:164;;;3822:1;3790:7;:19;3798:10;3790:19;;;;;;;;;;;;;;;:29;3810:8;3790:29;;;;;;;;;;;;;;;:33;;;;3749:164;;;3876:30;3889:16;3876:8;:12;;:30;;;;:::i;:::-;3844:7;:19;3852:10;3844:19;;;;;;;;;;;;;;;:29;3864:8;3844:29;;;;;;;;;;;;;;;:62;;;;3749:164;3939:8;3918:61;;3927:10;3918:61;;;3949:7;:19;3957:10;3949:19;;;;;;;;;;;;;;;:29;3969:8;3949:29;;;;;;;;;;;;;;;;3918:61;;;;;;;;;;;;;;;;;;3992:4;3985:11;;3603:398;;;;;:::o;1013:107:3:-;1069:15;1099:8;:16;1108:6;1099:16;;;;;;;;;;;;;;;;1092:23;;1013:107;;;:::o;169:27:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;432:379:3:-;495:4;530:1;515:17;;:3;:17;;;;507:26;;;;;;;;557:8;:20;566:10;557:20;;;;;;;;;;;;;;;;547:6;:30;;539:39;;;;;;;;671:32;696:6;671:8;:20;680:10;671:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;648:8;:20;657:10;648:20;;;;;;;;;;;;;;;:55;;;;725:25;743:6;725:8;:13;734:3;725:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;709:8;:13;718:3;709:13;;;;;;;;;;;;;;;:41;;;;777:3;756:33;;765:10;756:33;;;782:6;756:33;;;;;;;;;;;;;;;;;;802:4;795:11;;432:379;;;;:::o;2884:257:7:-;2962:4;3006:46;3040:11;3006:7;:19;3014:10;3006:19;;;;;;;;;;;;;;;:29;3026:8;3006:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2974:7;:19;2982:10;2974:19;;;;;;;;;;;;;;;:29;2994:8;2974:29;;;;;;;;;;;;;;;:78;;;;3079:8;3058:61;;3067:10;3058:61;;;3089:7;:19;3097:10;3089:19;;;;;;;;;;;;;;;:29;3109:8;3089:29;;;;;;;;;;;;;;;;3058:61;;;;;;;;;;;;;;;;;;3132:4;3125:11;;2884:257;;;;:::o;2301:126::-;2375:7;2397;:15;2405:6;2397:15;;;;;;;;;;;;;;;:25;2413:8;2397:25;;;;;;;;;;;;;;;;2390:32;;2301:126;;;;:::o;584:110:2:-;642:7;669:1;664;:6;;657:14;;;;;;688:1;684;:5;677:12;;584:110;;;;:::o;698:129::-;756:7;771:9;787:1;783;:5;771:17;;806:1;801;:6;;794:14;;;;;;821:1;814:8;;698:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport './SafeMath.sol';\nimport \"./token/StandardToken.sol\";\n\ncontract CatesToken is StandardToken {\n\n  string public name = \"Cates Token\";\n  string public symbol = \"CT\";\n  uint public decimals = 8;\n  uint public INITIAL_SUPPLY = 10000000000000000;\n\n  function CatesToken() public {\n    totalSupply = INITIAL_SUPPLY;\n    balances[msg.sender] = INITIAL_SUPPLY;\n  }\n\n}\n",
  "sourcePath": "/Users/chriscates/Projects/erc20-demo/contracts/CatesToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/chriscates/Projects/erc20-demo/contracts/CatesToken.sol",
      "exportedSymbols": {
        "CatesToken": [
          33
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "SourceUnit": 189,
          "absolutePath": "/Users/chriscates/Projects/erc20-demo/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 34,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "27:24:0"
      },
      {
        "attributes": {
          "SourceUnit": 655,
          "absolutePath": "/Users/chriscates/Projects/erc20-demo/contracts/token/StandardToken.sol",
          "file": "./token/StandardToken.sol",
          "scope": 34,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3,
        "name": "ImportDirective",
        "src": "52:35:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            274,
            317,
            346,
            654
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            33,
            654,
            274,
            317,
            346
          ],
          "name": "CatesToken",
          "scope": 34
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "StandardToken",
                  "referencedDeclaration": 654,
                  "type": "contract StandardToken"
                },
                "id": 4,
                "name": "UserDefinedTypeName",
                "src": "112:13:0"
              }
            ],
            "id": 5,
            "name": "InheritanceSpecifier",
            "src": "112:13:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 33,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 6,
                "name": "ElementaryTypeName",
                "src": "131:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "436174657320546f6b656e",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"Cates Token\"",
                  "value": "Cates Token"
                },
                "id": 7,
                "name": "Literal",
                "src": "152:13:0"
              }
            ],
            "id": 8,
            "name": "VariableDeclaration",
            "src": "131:34:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 33,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 9,
                "name": "ElementaryTypeName",
                "src": "169:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "4354",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"CT\"",
                  "value": "CT"
                },
                "id": 10,
                "name": "Literal",
                "src": "192:4:0"
              }
            ],
            "id": 11,
            "name": "VariableDeclaration",
            "src": "169:27:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 33,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 12,
                "name": "ElementaryTypeName",
                "src": "200:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "38",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 8",
                  "value": "8"
                },
                "id": 13,
                "name": "Literal",
                "src": "223:1:0"
              }
            ],
            "id": 14,
            "name": "VariableDeclaration",
            "src": "200:24:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "INITIAL_SUPPLY",
              "scope": 33,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 15,
                "name": "ElementaryTypeName",
                "src": "228:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3130303030303030303030303030303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 10000000000000000",
                  "value": "10000000000000000"
                },
                "id": 16,
                "name": "Literal",
                "src": "257:17:0"
              }
            ],
            "id": 17,
            "name": "VariableDeclaration",
            "src": "228:46:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "CatesToken",
              "payable": false,
              "scope": 33,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 18,
                "name": "ParameterList",
                "src": "298:2:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 19,
                "name": "ParameterList",
                "src": "308:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 321,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 20,
                            "name": "Identifier",
                            "src": "314:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 17,
                              "type": "uint256",
                              "value": "INITIAL_SUPPLY"
                            },
                            "id": 21,
                            "name": "Identifier",
                            "src": "328:14:0"
                          }
                        ],
                        "id": 22,
                        "name": "Assignment",
                        "src": "314:28:0"
                      }
                    ],
                    "id": 23,
                    "name": "ExpressionStatement",
                    "src": "314:28:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 201,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 24,
                                "name": "Identifier",
                                "src": "348:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 666,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 25,
                                    "name": "Identifier",
                                    "src": "357:3:0"
                                  }
                                ],
                                "id": 26,
                                "name": "MemberAccess",
                                "src": "357:10:0"
                              }
                            ],
                            "id": 27,
                            "name": "IndexAccess",
                            "src": "348:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 17,
                              "type": "uint256",
                              "value": "INITIAL_SUPPLY"
                            },
                            "id": 28,
                            "name": "Identifier",
                            "src": "371:14:0"
                          }
                        ],
                        "id": 29,
                        "name": "Assignment",
                        "src": "348:37:0"
                      }
                    ],
                    "id": 30,
                    "name": "ExpressionStatement",
                    "src": "348:37:0"
                  }
                ],
                "id": 31,
                "name": "Block",
                "src": "308:82:0"
              }
            ],
            "id": 32,
            "name": "FunctionDefinition",
            "src": "279:111:0"
          }
        ],
        "id": 33,
        "name": "ContractDefinition",
        "src": "89:304:0"
      }
    ],
    "id": 34,
    "name": "SourceUnit",
    "src": "0:394:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1515538333732": {
      "events": {},
      "links": {},
      "address": "0xdc20b2e336a866ccb64c44286124965f1fa41471"
    },
    "1515557215128": {
      "events": {},
      "links": {},
      "address": "0x34fd6f005a3dedbdf23070bdbf72121046708139"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-10T04:15:43.687Z"
}
