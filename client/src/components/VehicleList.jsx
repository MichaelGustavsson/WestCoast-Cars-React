import VehicleInfo from './VehicleInfo';

export default function VehicleList({ vehicles }) {
  return (
    <article>
      <h4>Här är ett litet exempel på bilar i vårt lager</h4>
      {vehicles.map((vehicle) => (
        <VehicleInfo key={vehicle.id} vehicle={vehicle} />
      ))}
    </article>
  );
}
