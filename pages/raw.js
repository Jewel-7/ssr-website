import axios from "axios";
import Link from "next/link";
import { Component } from "react";
import Navigation from "../components/Navigation";
import CompanyPage from "../components/CompanyPage";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const url = "https://heroku-json-data-server.herokuapp.com/companies";

class Users extends Component {
  render() {
    return (
      <div>
        <Navigation />

        {this.props.users.map((user) => {
          return <CompanyPage key={user.id} user={user} />;
        })}
        <h1 className={styles["des-head"]}>Our Employees</h1>
        <p className={styles["description1"]}>
          {" "}
          <Link href="/rawList">
            <p>---- Click Here -------</p>
          </Link>
        </p>

        <Footer />
      </div>
    );
  }
}

export const getStaticProps = async () => {
  let { data } = await axios.get(url);

  return {
    props: {
      users: [data[1]],
    },
  };
};
export default Users;
