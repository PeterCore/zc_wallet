export type ParamMnemonic = {
  Param: {
    mnemonic: string;
    password: string;
  };
};

export interface MnemonicItem {
  word: string;
  selected: boolean;
}
