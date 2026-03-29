const Step4Confirm = ({ selectedServices, date, details, resetBooking }) => {
  return (
    <div className="confirm-container">

      <h2>Confirm Your Booking</h2>

      {/* SERVICES */}
      <div className="confirm-box">
        <h4>Services</h4>
        {selectedServices.length > 0 ? (
          selectedServices.map((s) => (
            <p key={s.id}>• {s.name}</p>
          ))
        ) : (
          <p>No services selected</p>
        )}
      </div>

      {/* DATE & TIME */}
      <div className="confirm-box">
        <h4>Date & Time</h4>
        {date ? (
          <p>
            {date.toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short"
            })}
          </p>
        ) : (
          <p>No date selected</p>
        )}
      </div>

      {/* USER DETAILS */}
      <div className="confirm-box">
        <h4>Your Details</h4>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>Phone: {details.phone}</p>
      </div>

      {/* CONFIRM BUTTON */}
      <button
        className="confirm-btn"
        onClick={() => {
          alert("Booking Confirmed ✅");
          resetBooking(); // 🔥 FIX
        }}
      >
        Confirm Booking
      </button>

    </div>
  );
};

export default Step4Confirm;