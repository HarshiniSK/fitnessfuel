import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import MainSection from "./components/MainSection";

const queryClient = new QueryClient();

const App = () => {
  // API ENDPOINT: https://dev-api.fitnessfuel360.com/app/home

  // Fetch the data from the api endpoint and pass it to the components
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://dev-api.fitnessfuel360.com/app/home",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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
