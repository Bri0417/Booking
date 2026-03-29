const steps = [
  "Select Service",
  "Select Date & Time",
  "Your Details",
  "Confirm"
];

const Left = ({ step }) => {
  return (
    <div className="left-panel">
      <img src="/images/barber.png" className="barber-img" />

  <div className="steps">
  {steps.map((item, index) => (
    <div
      key={index}
      className={`step-item ${step === index ? "active" : ""}`}
    >
      {/* 🔥 NUMBER CIRCLE */}
      <div className={`circle ${step >= index ? "filled" : ""}`}>
        {index + 1}
      </div>

      {/* TEXT */}
      <p>{item}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Left;