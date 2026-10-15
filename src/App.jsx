
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function Home() {
  return <h2>Welcome to E-commerce Website</h2>;
}

function Orders() {
  return (
    <div>
      <h2>Order Management</h2>

      <nav>
        <Link to="current">Current Orders</Link>{" | "}
        <Link to="history">Order History</Link>{" | "}
        <Link to="cancelled">Cancelled Orders</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function CurrentOrders() {
  return <h3>Current Orders: Laptop, Mobile</h3>;
}

function OrderHistory() {
  return <h3>Order History: Shoes, Watch</h3>;
}

function CancelledOrders() {
  return <h3>Cancelled Orders: Headphones</h3>;
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>E-commerce Order Management</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/orders">Orders</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/orders" element={<Orders />}>
          <Route
            index
            element={<CurrentOrders />}
          />
          <Route
            path="current"
            element={<CurrentOrders />}
          />
          <Route
            path="history"
            element={<OrderHistory />}
          />
          <Route
            path="cancelled"
            element={<CancelledOrders />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
