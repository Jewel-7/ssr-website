import Navigation from "./Navigation";
// import EmployeeCard from "../components/EmployeeCard";
const Layout = (props) => {
  return (
    <div>
      <Navigation />

      {props.children}
    </div>
  );
};
export default Layout;
