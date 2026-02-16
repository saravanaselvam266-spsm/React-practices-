import React from "react";
import "./EventForm.css";
import { useState } from "react";

const EventForm = () => {
  // const[]

  return (
    <>
      <div className="form-container">
        <form>
          <label htmlFor="username">Name</label>
          <br />
          <input type="text" id="username" />
          <br />
          <label htmlFor="email">EmailId</label>
          <br />
          <input type="text" id="email" />
          <br />
          <label htmlFor="Phone">Phone</label>
          <br />
          <input type="number" id="phone" />
          <br />
          <label>City</label>
          <br />
          <input type="text" />
          <br />
          <label>Options for Food :</label>
          <br />
          <input type="checkbox" />
          <label>Breakfast</label>
          <input type="checkbox" />
          <label>Lunch</label>
          <input type="checkbox" />
          <label>Dinner</label>
        </form>
        <button>Submit</button>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>EmailId</th>
                <th>Phone</th>
                <th>City</th>
                <th>Food</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EventForm;




