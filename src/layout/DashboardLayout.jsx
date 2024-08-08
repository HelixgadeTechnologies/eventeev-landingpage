import { Outlet } from "react-router-dom";
import Sidebar from "../components/section/Sidebar";
import Header from "../components/section/Header";
import Content from "../components/section/Content";

const DashboardLayout = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  </div>
);

export default DashboardLayout;
