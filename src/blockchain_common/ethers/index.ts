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
  seedByte = 16,
  needPrivateKey = false,
  needPublicKey = false,
  needKeystore = true,
  mnemonicPassword = '',
) => {
  return new Promise((fullfill, reject) => {
    
  });
};
