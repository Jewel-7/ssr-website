import axios from "axios";
import { Component } from "react";
import Navigation from "../components/Navigation";
import EmployeeCard from "../components/EmployeeCard";
import Footer from "../components/Footer";

const url = "https://heroku-json-data-server.herokuapp.com/companies";

class Users extends Component {
  //   state = {
  //     employees: [],
  //   };
  //   componentDidMount = async () => {
  //     let { data } = await axios.get(url);
  //     this.setState({ employees: [...data] });
  //   };
  render() {
    return (
      <div>
        <Navigation />

        {this.props.users.map((user) => {
          // return <p key={user.id}>{user.name}</p>;
          return <EmployeeCard key={user.id} user={user} />;
        })}
        <Footer />
      </div>
    );
  }
}

export const getStaticProps = async () => {
  let { data } = await axios.get(url);

  return {
    props: {
      users: [data[2]],
    },
  };
};
export default Users;
