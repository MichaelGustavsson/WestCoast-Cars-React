export default function VehicleList({ vehicles }) {
  console.log(vehicles);

  return (
    <article>
      <h4>Här är ett litet exempel på bilar i lager</h4>
      <section>
        <div>{vehicles[0].registrationNo}</div>
        <div>{vehicles[0].make}</div>
        <div>{vehicles[0].model}</div>
        <img src={vehicles[0].imageUrl} alt='' width='400' />
      </section>
      <section>
        <div>{vehicles[1].registrationNo}</div>
        <div>{vehicles[1].make}</div>
        <div>{vehicles[1].model}</div>
        <img src={vehicles[1].imageUrl} alt='' width='400' />
      </section>
    </article>
  );
}
