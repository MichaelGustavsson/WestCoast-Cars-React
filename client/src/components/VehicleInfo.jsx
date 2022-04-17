const VehicleInfo = ({ vehicle }) => {
  return (
    <section className='card'>
      <img className='small-image' src={vehicle.imageUrl} alt='' width='400' />
      <div>{vehicle.registrationNo}</div>
      <div>{vehicle.make}</div>
      <div>{vehicle.model}</div>
    </section>
  );
};

export default VehicleInfo;
