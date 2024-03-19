import { Route, Routes } from "react-router-dom";
import MainView from "../User/Marketplace/MainView";
import Login from "../User/Auth/Login";
import AdminPanelHome from "../AdminPanel/AdminPanelHome";
import AdminPanelEditProduct from "../AdminPanel/AdminPanelEditProduct/AdminPanelEditProduct";
import AdminPanelCreateProduct from "../AdminPanel/AdminPanelCreateProduct/AdminPanelCreateProduct";
import AdminPanelNavBar from "../AdminPanel/AdminPanelNavBar/AdminPanelNavBar";
import { getCurrentUser } from "../User/Auth/AuthScripts";
import AdminProfile from "../AdminPanel/AdminPanelProfile/AdminProfile";

const AppRouter = () => {
  const user = getCurrentUser();

  return (
    <div>
      {user && user.role === "admin" ? (
        <>
          <AdminPanelNavBar />
          <Routes>
            <Route
              path="/admin"
              element={
                <>
                  <AdminPanelHome />
                </>
              }
            />
            <Route
              path="/admin/products/:id"
              element={<AdminPanelEditProduct />}
            />
            <Route
              path="/admin/products/create"
              element={<AdminPanelCreateProduct />}
            />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default AppRouter;
