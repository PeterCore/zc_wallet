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

export const checkPassword = (password: string) => {
  const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const result: boolean = regex.test(password);
  // const regex_upper_letter: RegExp = /^[A-Z]/;
  // const regex_lower_letter: RegExp = /^[a-z]/;


  return result;
};


