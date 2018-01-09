pragma solidity ^0.4.18;


import './SafeMath.sol';
import "./token/StandardToken.sol";

contract CatesToken is StandardToken {

  string public name = "Cates Token";
  string public symbol = "CT";
  uint public decimals = 8;
  uint public INITIAL_SUPPLY = 10000000000000000;

  function CatesToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
