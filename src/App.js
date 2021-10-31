import "./App.css";
import axios from "axios";
import {QueryClient, QueryClientProvider } from "react-query";
import MainSection from "./components/MainSection";

const queryClient = new QueryClient();

const App = () => {

  const config = {
    headers: {'Access-Control-Allow-Origin': "*"}
  }

  const fetchData = async() => {
    const {data} = await axios.get("/home")
    return data
  }
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainSection fetchData={fetchData} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
