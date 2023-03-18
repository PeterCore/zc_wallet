require('node-libs-react-native/globals');
import {ethers} from 'ethers';

export const generateMnemonic = (length: number = 16) => {
  try {
    const privateSeed = ethers.utils.randomBytes(length);
    const mnemonic = ethers.utils.entropyToMnemonic(privateSeed);
    console.log(mnemonic);
    return mnemonic;
  } catch (error) {
    console.log(error);
  }
};
