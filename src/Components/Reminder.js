import React from "react";

export default function Reminder() {
  //   function opentab() {
  //     document.getElementById("demo").style.color = "red";
  //   }

  return (
    <div className="reminder_box">
      <div className="reminder_title">Reminder For user 1</div>
      <div className="reminder_calender">
        <div className="reminder_day">
          <div className="reminder_dayName">Sun</div>
          <div className="reminder_dayDate">7</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Mon</div>
          <div className="reminder_dayDate">8</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Tue</div>
          <div className="reminder_dayDate">9</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Wed</div>
          <div className="reminder_dayDate">10</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Thru</div>
          <div className="reminder_dayDate">11</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Fri</div>
          <div className="reminder_dayDate">12</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Sat</div>
          <div className="reminder_dayDate">13</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Sun</div>
          <div className="reminder_dayDate">14</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Mon</div>
          <div className="reminder_dayDate">15</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Tue</div>
          <div className="reminder_dayDate">16</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Wed</div>
          <div className="reminder_dayDate">17</div>
        </div>
        <div className="reminder_day">
          <div className="reminder_dayName">Thru</div>
          <div className="reminder_dayDate">18</div>
        </div>
      </div>
      <div className="reminder_details">
        <div
          style={{
            fontSize: "1.2rem",
            margin: "10px 0px 15px 0px",
            fontWeight: "500",
          }}
        >
          Reminders
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 1</div>
          <div className="medicine_time">6:30 pm</div>
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 2</div>
          <div className="medicine_time">7:30 pm</div>
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 3</div>
          <div className="medicine_time">8:30 pm</div>
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 4</div>
          <div className="medicine_time">9:30 pm</div>
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 5</div>
          <div className="medicine_time">9:45 pm</div>
        </div>
        <div className="reminder_info">
          <div className="medicine_name">Medicine No 6</div>
          <div className="medicine_time">10:00 pm</div>
        </div>
        <button
          type="button"
          className="btn add-sign-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
            style={{ width: "2.3rem" }}
            alt=""
          />
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Reminder
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="fname" style={{ marginLeft: "-40px" }}>
                  <label for="fname" style={{ marginRight: "1rem" }}>
                    Medicine Name
                  </label>
                  <input type="text" id="fname" name="fname" />
                </div>
                <br></br>
                <div className="lname" style={{ marginLeft: "36px" }}>
                  <label for="lname" style={{ marginRight: "1rem" }}>
                    Time
                  </label>
                  <input type="text" id="lname" name="lname" />
                  <br></br>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
