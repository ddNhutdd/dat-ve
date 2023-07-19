import { Component } from "react";
export default class Ghe extends Component {
  render() {
    let iden = "row_" + this.props.iden;
    return (
      <>
        <td>
          <input
            type="checkbox"
            id={iden}
            onChange={() => {}}
            checked={this.props.daChon}
            disabled={this.props.daDat}
          />
          <label onClick={() => this.props.datGhe()} htmlFor={iden} />
        </td>
      </>
    );
  }
}
