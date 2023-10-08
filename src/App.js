import logo from './logo.svg';
import './App.css';
import FormicEg from './component/formic/FormicEg';
import CustomDataTAble from './component/DataTableCustom/CustomDataTAble';
import EventBubling from './component/eventBubling/EventBubling';
import ReactPagination from './component/PaginationCustom/ReactPagination';
import DataTable from './component/DataTableCustom/DataTable';
import Counter from './component/counter/Counter';
import CalanderEg from './component/Calander/CalanderEg';
import EventsEg from './component/events/EventsEg';

function App() {
  return (
    <div className="App">
      {/* <FormicEg /> */}
      {/* <DataTable /> */}
      {/* <Counter /> */}
      {/* <ReactPagination /> */}
      {/* <EventBubling /> */}
      {/* <CalanderEg /> */}
      <EventsEg />
    </div>
  );
}

export default App;
