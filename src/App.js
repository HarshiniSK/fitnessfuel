import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import MainSection from "./components/MainSection";

const queryClient = new QueryClient();

const App = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  // https://dev-api.fitnessfuel360.com/app/home
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://dev-api.fitnessfuel360.com/app/home",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          origin: "*"
        },
      }
    );
    return data;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainSection fetchData={fetchData} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
