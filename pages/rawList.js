import axios from "axios";
import EmpCard from "../components/Empcard";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export const URL =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";

function RawEmp(props) {
  let { users } = props;
  return (
    <div>
      <Navigation />
      {users.map((user) => {
        if (user.company === "RawEngineering") {
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

export default RawEmp;
