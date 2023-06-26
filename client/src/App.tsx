import {ProductProvider} from './context/ProductProvider';
import Products from './screens/Products';
import AddProduct from './screens/AddProduct';
import { Routes, Route } from "react-router-dom";
import './sass/app.sass';
function App() {
  return (
    <ProductProvider>
      <Routes>
          <Route path="/"  element={<Products/>} />
          <Route path="/product/add" element={<AddProduct/>} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
