const BugList = ({ bugs }) => {
  return (
    <section className="page" id="bug-list">
      <h1>BugList</h1>
      <div className="flex">
        {bugs.map((bug) => (
          <h4>{bug.name}</h4>
        ))}
      </div>
    </section>
  );
};

export default BugList;
