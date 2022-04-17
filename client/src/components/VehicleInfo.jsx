const VehicleInfo = ({ vehicle }) => {
  return (
    <section>
      <div>{vehicle.registrationNo}</div>
      <div>{vehicle.make}</div>
      <div>{vehicle.model}</div>
      <img src={vehicle.imageUrl} alt='' width='400' />
    </section>
  );
};

export default VehicleInfo;
