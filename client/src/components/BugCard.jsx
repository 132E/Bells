

const BugCard = ({bug}) => {
    return (
        <span className="bug-card">
            <h4>Number: {bug.number}</h4>
            <h3>Name: {bug.name}</h3>
            <img src={bug.image} alt={bug.name} />
            <h4>Sell Price: {bug.sellPrice}</h4>
            <p>Location {bug.location}</p>
            <p>Weather: {bug.weather}</p>
            <p>Time: {bug.timeOfDay}</p>
            <p>Total catches:{bug.totalCatches}</p>
        </span>
    )
}
export default BugCard