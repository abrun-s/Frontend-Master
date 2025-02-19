import NewTodoForm from "@/components/NewTodoFrom";
import { Children } from "react";

const dashboardLayout = ({children}) => {
  return (
  <div>
    <h1>dashboard</h1>
    <div><NewTodoForm/></div>
    <div>{children}</div>
  </div>
  );
};

export default dashboardLayout
