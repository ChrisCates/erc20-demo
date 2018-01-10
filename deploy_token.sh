truffle compile
truffle deploy
cp ./build/contracts/CatesToken.json ./src/app/CatesToken.ts

echo '0a
export default
.
w' | ed ./src/app/CatesToken.ts
