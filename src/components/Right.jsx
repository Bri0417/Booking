import Stepper from "./Stepper";
import Step1 from "../pages/Step1Service";
import Step2 from "../pages/Step2DateTime";
import Step3 from "../pages/Step3Details";
import Step4 from "../pages/Step4Confirm";

const Right = ({
  step,
  setStep,
  selectedServices,
  setSelectedServices,
  date,
  setDate,
  time,
  setTime,
  details,
  setDetails,
  resetBooking
}) => {
  return (
    <div className="right-panel">
      {/* 🔥 STEPPER */}
      <div className="right-content">
      <Stepper step={step} />

      {/* 🔥 STEP PAGES */}
      {step === 0 && (
        <Step1
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
      )}

      {step === 1 && (
        <Step2 date={date} setDate={setDate} time={time} setTime={setTime} />
      )}

      {step === 2 && <Step3 details={details} setDetails={setDetails} />}

      {step === 3 && (
        <Step4
          selectedServices={selectedServices}
          date={date}
          time={time}
          details={details}
          resetBooking={resetBooking} 
        />
      )}
      {/* BUTTONS */}
      <div className="nav-btns btn-size">
        {/* BACK */}
        {step > 0 && (
          <button className="back-btn" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {/* NEXT */}
        {step < 3 && (
          <button
            className="next-btn btn-size"
            onClick={() => setStep(step + 1)}
            disabled={
              (step === 0 && selectedServices.length === 0) || // Step1
              (step === 1 && (!date || !time)) || // Step2 (calendar + time)
              (step === 2 &&
                (!details.name || !details.email || !details.phone)) // Step3
            }
          >
            Next
          </button>
        )}
      </div>
      </div>
    </div>
  );
};

export default Right;
