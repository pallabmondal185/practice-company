import logo from './logo.svg';
import './App.css';
import FormicEg from './component/formic/FormicEg';
import CustomDataTAble from './component/DataTableCustom/CustomDataTAble';
import EventBubling from './component/eventBubling/EventBubling';
import ReactPagination from './component/PaginationCustom/ReactPagination';

function App() {
  return (
    <div className="App">
      {/* <FormicEg /> */}
      <CustomDataTAble />
      {/* <ReactPagination /> */}
      {/* <EventBubling /> */}
    </div>
  );
}

export default App;
