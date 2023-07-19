import { Component } from "react";
import { connect } from "react-redux";
import dataPrice from "../../../public/data/data.json";
import { xoaGheCreator, datGheCreator } from "../../redux/dat-ve/dat-ve.action";
class XacNhan extends Component {
  timGia = (item) => {
    let price = dataPrice.filter((n) => n.soGhe === item);
    return price.length ? price[0].gia : 0;
  };
  tongTien = (listDangChon) => {
    return listDangChon.reduce((total, item) => {
      return total + this.timGia(item);
    }, 0);
  };
  renderHtmlTd = () => {
    return this.props.listGheDangChon.map((n) => {
      return (
        <tr key={n}>
          <td>{n}</td>
          <td>{this.timGia(n).toLocaleString()}</td>
          <td>
            <span onClick={() => this.props.dispatch(xoaGheCreator(n))}>X</span>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="side">
        <div className="side__title">danh sách ghế bạn chọn</div>
        <div className="side__guide">
          <div className="side__guide__line">
            <span className="side__guide__line__booked" />
            <span>Ghế đã đặt</span>
          </div>
          <div className="side__guide__line">
            <span className="side__guide__line__booking" />
            <span>Ghế đang chọn</span>
          </div>
          <div className="side__guide__line">
            <span className="side__guide__line__empty" />
            <span>Ghế chưa đặt</span>
          </div>
        </div>
        <div className="side__table">
          <table>
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>{this.renderHtmlTd()}</tbody>
            <tfoot>
              <tr>
                <th>Tổng tiền</th>
                <td>
                  {this.tongTien(this.props.listGheDangChon).toLocaleString()}
                </td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
        <button onClick={() => this.props.dispatch(datGheCreator())}>
          Đặt ghế
        </button>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    listGheDangChon: rootReducer.datVeReducer.listGheDangChon,
  };
};
export default connect(mapStateToProps)(XacNhan);
