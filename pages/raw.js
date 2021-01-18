import axios from "axios";
import Link from "next/link";
import { Component } from "react";
import Navigation from "../components/Navigation";
import CompanyPage from "../components/CompanyPage";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

class Users extends Component {
  render() {
    return (
      <div>
        <Navigation />

        {this.props.users.map((user) => {
          return <CompanyPage key={user.id} user={user} />;
        })}
        <h1 className={styles["des-head"]}>Our Employee</h1>
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
  let { data } = await axios.get(
    "https://heroku-json-data-server.herokuapp.com/companies/2"
  );

  return {
    props: {
      users: [data],
    },
  };
};
export default Users;
