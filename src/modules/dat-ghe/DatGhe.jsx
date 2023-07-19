import { Component } from "react";
import { connect } from "react-redux";
import Ghe from "../ghe/Ghe";
import { chonGheCreator } from "../../redux/dat-ve/dat-ve.action";
class DatGhe extends Component {
  anphabe = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  renderHtmlTr = () => {
    let i = 0;
    return this.anphabe.map((n) => {
      return (
        <tr key={i++}>
          <th>{n}</th>
          {this.renderHtmlTd(n)}
        </tr>
      );
    });
  };
  renderHtmlTd = (row) => {
    let result = [];
    for (let i = 0; i < 12; i++) {
      let iden = row + (i + 1);
      const iDaDat = this.props.listGheDaDat.findIndex((n) => n === iden);
      let bDaDat = false;
      if (iDaDat != -1) bDaDat = true;
      const iDaChon = this.props.listGheDangChon.findIndex((n) => n === iden);
      let bDaChon = false;
      if (iDaChon != -1) bDaChon = true;
      result.push(
        <Ghe
          datGhe={() => this.props.dispatch(chonGheCreator(iden))}
          daChon={bDaChon}
          daDat={bDaDat}
          iden={iden}
          key={i}
        />
      );
    }
    return result;
  };
  render() {
    return (
      <div className="main">
        <div className="main__title">đặt vé xem phim cyperlearn.vn</div>
        <div className="main__screen">
          <div className="main__text">màn hình</div>
          <div className="main__screen-position" />
          <div className="main__list-seat">
            <table>
              <thead>
                <tr>
                  <th />
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                </tr>
              </thead>
              <tbody>{this.renderHtmlTr()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    listGheDaDat: rootReducer.datVeReducer.listGheDaDat,
    listGheDangChon: rootReducer.datVeReducer.listGheDangChon,
  };
};
export default connect(mapStateToProps)(DatGhe);
