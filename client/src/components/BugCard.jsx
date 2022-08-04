const BugCard = ({bug}) => {
    return (
        <span className="bug-card">
            <h3>{bug.name}</h3>
        </span>
    )
}
export default BugCard