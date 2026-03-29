const ServiceCard = ({ item, selectedServices, setSelectedServices }) => {
  const isSelected = selectedServices.some(s => s.id === item.id);

  const handleClick = () => {
    if (isSelected) {
      setSelectedServices(prev =>
        prev.filter(s => s.id !== item.id)
      );
    } else {
      setSelectedServices(prev => [...prev, item]);
    }
  };

  return (
    <div
      className={`service-card ${isSelected ? "active" : ""}`}
      onClick={handleClick}
    >
      {/* LEFT CHECKBOX */}
      <div className={`checkbox ${isSelected ? "checked" : ""}`}>
        {isSelected && "✓"}
      </div>

      {/* TEXT */}
      <div className="service-text">
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>

      {/* RIGHT ICON */}
      <div className="service-icon">
        <img src={item.icon} alt={item.name} />
      </div>
    </div>
  );
};

export default ServiceCard;