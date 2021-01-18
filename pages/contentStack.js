import axios from "axios";
import { Component } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import CompanyPage from "../components/CompanyPage";
import Footer from "../components/Footer";

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
          <Link href="/csList">
            <p>------- Click Here ---</p>
          </Link>
        </p>

        <Footer />
      </div>
    );
  }
}

export const getStaticProps = async () => {
  let { data } = await axios.get(
    "https://heroku-json-data-server.herokuapp.com/companies/3"
  );

  return {
    props: {
      users: [data],
    },
  };
};
export default Users;
