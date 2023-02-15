import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "~/layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index)=> {
            // conditions on a case-by-case basisS
            const Page = route.component;
            return <Route 
                      key={index} 
                      path={route.path} 
                      element={
                        <Layout>
                          <Page/>
                        </Layout>
                      }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
