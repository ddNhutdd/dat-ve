import { DAT_VE } from "./dat-ve.const";
export const chonGheCreator = (payload) => {
  return {
    type: DAT_VE.CHON_GHE,
    payload,
  };
};
export const xoaGheCreator = (payload) => {
  return {
    type: DAT_VE.XOA_GHE,
    payload,
  };
};
export const datGheCreator = (payload) => {
  return {
    type: DAT_VE.DAT_GHE,
    payload,
  };
};
