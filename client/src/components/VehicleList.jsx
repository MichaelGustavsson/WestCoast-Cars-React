import VehicleInfo from './VehicleInfo';

export default function VehicleList({ vehicles }) {
  return (
    <article className='vehicle-list'>
      {vehicles.map((vehicle) => (
        <VehicleInfo key={vehicle.id} vehicle={vehicle} />
      ))}
    </article>
  );
}
