import React from "react";
import "./shows.css";
const Shows = () => {
  return (
    <div className="my-5">
      <div className="shows d-flex justify-content-center">
        <div className="s mx-2">S</div>
        <div className="h mx-2">H</div>
        <div className="o mx-2">O</div>
        <div className="w mx-2">W</div>
        <div className="Ss mx-2">S</div>
      </div>
      <table className="table mx-10">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>June 23rd</td>
            <td>Jules Mae Saloon - Seattle WA</td>
            <td>Ticket Link</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>June 25th</td>
            <td>Rontoms - Portland OR</td>
            <td>Free</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className="past">May 20th</td>
            <td className="past">Ghost Mountain - Portland OR</td>
            <td className="past">Free</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className="past">April 21st</td>
            <td className="past">John Henry's - Eugene OR</td>
            <td className="past">Ticket link</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shows;
