import logo from './logo.svg';
import './App.css';
import FormicEg from './component/formic/FormicEg';
import CustomDataTAble from './component/DataTableCustom/CustomDataTAble';
import EventBubling from './component/eventBubling/EventBubling';
import ReactPagination from './component/PaginationCustom/ReactPagination';
import DataTable from './component/DataTableCustom/DataTable';
import Counter from './component/counter/Counter';
import Parent from './component/Memo/MemoEg1/Parent';
import CalanderEg from './component/Calander/CalanderEg';
import EventsEg from './component/events/EventsEg';
import CalenderCustomEg from './component/Calander/CalenderCustomEg';
import TextAnimation from './component/textAnimation/TextAnimation';
import LazyLoadingEg1 from './component/LazyLoading/LazyLoadingEg1';
import GoogleCalender from './component/GoogleCalander/GoogleCalender';

function App() {
  return (
    <div className="App">
      {/* <FormicEg /> */}
      {/* <DataTable /> */}
      {/* <Counter /> */}
      {/* <ReactPagination /> */}
      {/* <EventBubling /> */}
      {/* <Parent /> */}
      {/* <CalanderEg /> */}
      {/* <CalenderCustomEg /> */}
      {/* <EventsEg /> */}
      {/* <TextAnimation /> */}
      {/* <LazyLoadingEg1 /> */}
      <GoogleCalender />
    </div>
  );
}

export default App;
