import {BigNumber, ethers} from 'ethers';

/**
 *
 *
 * @export
 * @param {string} password
 * @param {string} [path="m/44'/60'/0'/0/0"]
 * @param {number} [seedByte=16]
 * @param {boolean} [needPrivateKey=false]
 * @param {boolean} [needPublicKey=false]
 * @param {boolean} [needKeystore=true]
 * @param {string} [mnemonicPassword='']
 * @return {Promise<{address:'',mnemonic:[],keystore:{},shuffleMnemonic:[],publicKey:'',privateKey:''}>} 
 */

export const createWallet = (
  password: string,
  path: string = "m/44'/60'/0'/0/0",
  mnemonic: string = '',
  needPrivateKey: boolean = true,
  needPublicKey: boolean = false,
  needKeystore: boolean = true,
  mnemonicPassword: string = '',
) => {
  return new Promise((fullfill, reject) => {
    mnemonicPassword = mnemonicPassword ? mnemonicPassword : '';
    let node = ethers.utils.HDNode.fromMnemonic(mnemonic, mnemonicPassword);
    let hdnode = node.derivePath(path);
    let mnemonicArr = mnemonic.split(' ');
    let shuffleMnemonicArr = shuffleArray(mnemonicArr);
    let response = {
      mnemonic: mnemonicArr,
      shuffleMnemonic: shuffleMnemonicArr,
      address: hdnode.address,
    };
  });
};

/**
 * Fisher–Yates shuffle
 *
 * @export
 * @param {[]} origin
 * @return {[]}
 */
export const shuffleArray = (origin: string[]) => {
  let array = origin.slice();
  return ethers.utils.shuffled(array);
};

// export function bigNumberFormatUnits(value , decims = 18){
//   return ethers.utils.formatUnits(value, decims);
// }

// export function bigNumberParseUnits(value , decims = 18){
//   return ethers.utils.parseUnits(value, decims);
// }

// export function getEventNameID(eventName){
//   return ethers.utils.id(eventName);
// }

// export function hexZeroPad(value, length){
//   return ethers.utils.hexZeroPad(value, length);
// }

// export function hexString(value){
//   return ethers.utils.hexValue(value);
// }

// export function arrayify(value){
//   return ethers.utils.arrayify(value);
// }

// export function hexlify(value){
//   return ethers.utils.hexlify(value);
// }

// export function encodeABI(types, values){
//   return ethers.utils.defaultAbiCoder.encode(types, values);
// }

// export function decodeABI(types, data){
//   return ethers.utils.defaultAbiCoder.decode(types, data);
// }

// export function createBigNumber(value){
//   return BigNumber.from(value);
// }