import React, { Component } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import AboutCompany from "./AboutCompany";
import AboutTeam from "./AboutTeam";

class About extends Component {
  //   constructor() {
  //     super();
  //     this.handelClick = this.handelClick.bind(this);
  //   }

  constructor() {
    super();
    // console.log("i`m in about ");
  }

  state = {
    count: 0,
  };
  handelClick = () => {
    // this.state.count = this.state.count + 1;
    this.setState({ count: 90 });
    // console.log(this);
  };

  componentDidMount() {
    // console.log("i`m in about amount");
  }

  componentDidUpdate(a, b, c, d) {
    // console.log("i`m in about Update", a, b, c, d);
  }

  render() {
    // console.log("i`m in about render");
    return (
      <div>
        <h1>Hello From About</h1>

        <div className="row">
          {/* Sidebar */}
          <div className="col-3 border-end border-warning ">
            <Link className="d-block link-success" to="/about/team">
              About Team
            </Link>
            <Link className="d-block link-success" to="/about/company">
              About Company
            </Link>
          </div>
          {/* content */}
          <div className="col-9">
            {/* <Routes>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Routes> */}
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
