import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

const Step1Service = ({ selectedServices, setSelectedServices }) => {
  return (
    <div className="serive-list">
      <h1>Select Services</h1>
      <h4>Choose the services you want to book</h4>

      {services.map((item) => (
        <ServiceCard
          key={item.id}
          item={item}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
        />
      ))}
    </div>
  );
};

export default Step1Service;