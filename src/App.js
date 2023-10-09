import logo from './logo.svg';
import './App.css';
import FormicEg from './component/formic/FormicEg';
import CustomDataTAble from './component/DataTableCustom/CustomDataTAble';
import EventBubling from './component/eventBubling/EventBubling';
import ReactPagination from './component/PaginationCustom/ReactPagination';
import DataTable from './component/DataTableCustom/DataTable';
import Counter from './component/counter/Counter';
import Parent from './component/Memo/MemoEg1/Parent';

function App() {
  return (
    <div className="App">
      {/* <FormicEg /> */}
      {/* <DataTable /> */}
      {/* <Counter /> */}
      {/* <ReactPagination /> */}
      {/* <EventBubling /> */}
      <Parent />
    </div>
  );
}

export default App;
