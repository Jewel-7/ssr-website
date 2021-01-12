import axios from "axios";
import EmpCard from "../components/Empcard";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export const URL =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";

function SurfEmp(props) {
  let { users } = props;
  return (
    <div>
      <Navigation />
      {users.map((user) => {
        if (user.company === "Surfboard") {
          return <EmpCard key={user.id} {...user} />;
        }
      })}
      <Footer />
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios.get(URL);
  return {
    props: {
      users: [...data],
    },
  };
};

export default SurfEmp;
