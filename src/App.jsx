import DatGhe from './modules/dat-ghe/DatGhe'
import XacNhan from './modules/xac-nhan/XacNhan'
function App() {
  return (
    <div className="content-book">
      <div className="content-book__container">
        <DatGhe />
        <XacNhan />
      </div>
    </div>
  );
}
export default App;
