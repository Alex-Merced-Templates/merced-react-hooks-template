import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { TaskStore } from "./TaskRunner";

function App() {
  return (
    <div>
      <TaskStore>
        <Header />
        <Main />
        <Footer />
      </TaskStore>
    </div>
  );
}

export default App;
