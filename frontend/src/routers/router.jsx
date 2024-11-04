import {createBrowserRouter} from "react-router-dom";

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