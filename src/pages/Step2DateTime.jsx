// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Step2DateTime = ({ date, setDate }) => {
//   return (
//     <div className="datetime-container">

//       <h2>Make an Appointment</h2>

//       <div className="datepicker-wrapper">

//         <DatePicker
//           selected={date}
//           onChange={(selectedDate) => setDate(selectedDate)}
          
//           showTimeSelect   // 🔥 time select enable
//           timeIntervals={30} // 30 mins gap
          
//           dateFormat="MMMM d, yyyy h:mm aa"
          
//           minDate={new Date()} // past disable
          
//           placeholderText="Select date & time"
          
//           className="datepicker-input"
//         />

//       </div>

//     </div>
//   );
// };

// export default Step2DateTime;
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM"
];

const Step2DateTime = ({ date, setDate, time, setTime }) => {
  return (
    <div className="dt-container">

      <h2 className="dt-title">Make an Appointment</h2>

      <div className="dt-wrapper">

        {/* LEFT - CALENDAR */}
        <div className="dt-calendar">
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
          />
        </div>

        {/* RIGHT - TIME */}
        <div className="dt-time">

          <p className="dt-date">
            {date?.toDateString()}
          </p>

          <div className="dt-time-list">
            {timeSlots.map((slot, i) => (
              <button
                key={i}
                className={`dt-time-btn ${
                  time === slot ? "active" : ""
                }`}
                onClick={() => setTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default Step2DateTime;