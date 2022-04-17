import VehicleInfo from './VehicleInfo';

export default function VehicleList({ vehicles }) {
  console.log(vehicles);

  return (
    <article>
      <h4>Här är ett litet exempel på bilar i lager</h4>
      <VehicleInfo vehicle={vehicles[0]} />
      <VehicleInfo vehicle={vehicles[1]} />
      <VehicleInfo vehicle={vehicles[2]} />
      <VehicleInfo vehicle={vehicles[3]} />
      <VehicleInfo vehicle={vehicles[4]} />
    </article>
  );
}
