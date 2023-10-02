import logo from './logo.svg';
import './App.css';
import FormicEg from './component/formic/FormicEg';
import CustomDataTAble from './component/DataTableCustom/CustomDataTAble';
import EventBubling from './component/eventBubling/EventBubling';
import ReactPagination from './component/PaginationCustom/ReactPagination';
import DataTable from './component/DataTableCustom/DataTable';

function App() {
  return (
    <div className="App">
      {/* <FormicEg /> */}
      <DataTable />
      {/* <ReactPagination /> */}
      {/* <EventBubling /> */}
    </div>
  );
}

export default App;
