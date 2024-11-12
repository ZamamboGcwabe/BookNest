import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Home from "../pages/home/Home";
import Register from "../components/Register";
import CartPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook"
import CheckoutPage from "../pages/books/CheckoutPage";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
import UserDashboard from "../pages/dashboard/users/UserDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>About</div>

            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook/>
            },
            {
                path: "/user-dashboard",
                element: <PrivateRoute><UserDashboard/></PrivateRoute>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLogin/>
    },
    {
        path: "/dashboard",
        element: <AdminRoute>
            <DashboardLayout/>
        </AdminRoute>,
        children:[
            {
                path: "",
                element: <AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path: "add-new-book",
                element: <AdminRoute>
                    <AddBook/>
                </AdminRoute>
            },
            {
                path: "manage-books",
                element: <AdminRoute>
                    <ManageBooks/>
                </AdminRoute>
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute>
                    <UpdateBook/>
                </AdminRoute>
            }
        ]
    }
]);

export default router;