import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/ProductsPage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
      <div>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<ProductsPage/>}/>
                  <Route path='cart' element={<BasketPage/>}/>
                  <Route path="*" element={<h1>Page Not Found: 404</h1>} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
          
