import { DAT_VE } from "./dat-ve.const";
const STATE_DEFAULT = {
  listGheDaDat: ["A4", "C6", "D2"],
  listGheDangChon: [],
};
export const datVeReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case DAT_VE.CHON_GHE: {
      let newListGheDangChon = [...state.listGheDangChon];
      const index = newListGheDangChon.findIndex((n) => n == action.payload);
      if (index === -1) {
        newListGheDangChon.push(action.payload);
      } else {
        newListGheDangChon = newListGheDangChon.filter(
          (n) => n !== action.payload
        );
      }
      state.listGheDangChon = newListGheDangChon;
      return { ...state };
    }
    case DAT_VE.XOA_GHE: {
      let newListGheDangChon = [...state.listGheDangChon];
      const index = newListGheDangChon.findIndex((n) => n == action.payload);
      if (index !== -1) {
        newListGheDangChon = newListGheDangChon.filter(
          (n) => n !== action.payload
        );
      }
      state.listGheDangChon = newListGheDangChon;
      return { ...state };
    }
    case DAT_VE.DAT_GHE: {
      let newListGheDaDat = [...state.listGheDaDat, ...state.listGheDangChon];
      state.listGheDaDat = newListGheDaDat;
      state.listGheDangChon = [];
      alert("Đặt thành công");
      return { ...state };
    }
    default:
      return state;
  }
};
