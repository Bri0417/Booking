import { useState } from "react";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import Footer from "./components/Footer";
import "./styles.css";
import "./responsive.css";
function App() {
  const [step, setStep] = useState(0);

  const [selectedServices, setSelectedServices] = useState([]);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [details, setDetails] = useState({});

 // ✅ 🔥 ADD HERE (RESET FUNCTION)
  const resetBooking = () => {
    setStep(0);
    setSelectedServices([]);
    setDate(new Date());
    setTime("");
    setDetails({});
  };
  return (
    <>
      <Header />

      <div className="layout main-container ">
        <div className="content">
          {/* LEFT */}
          <Left step={step} />

          {/* RIGHT 🔥 */}
          <Right
            step={step}
            setStep={setStep}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            details={details}
            setDetails={setDetails}
            resetBooking={resetBooking}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
