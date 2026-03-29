const Stepper = ({ step }) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="stepper">
      {steps.map((item, index) => (
        <div className="stepper-item" key={index}>
          
          <div className={`circle ${step >= index ? "active" : ""}`}>
            {item}
          </div>

          {index !== steps.length - 1 && (
            <div className={`line ${step > index ? "active" : ""}`} />
          )}

        </div>
      ))}
    </div>
  );
};

export default Stepper;