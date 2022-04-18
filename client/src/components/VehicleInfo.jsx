const VehicleInfo = ({ vehicle }) => {
  return (
    <section className='card'>
      <img className='small-image' src={vehicle.imageUrl} alt='' width='400' />
      <div>{vehicle.registrationNo}</div>
      <div>{vehicle.make}</div>
      <div>{vehicle.model}</div>
      <div>{vehicle.modelYear}</div>
      <div>{vehicle.mileage} km</div>
      <div>{vehicle.value} Kr</div>
    </section>
  );
};

export default VehicleInfo;
