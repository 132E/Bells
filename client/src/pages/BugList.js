const BugList = ({ bugs }) => {
  return (
    <section>
      <h1>Bugs</h1>
      {bugs.map((bug) => (
        <h3>{bug.name}</h3>
      ))}
    </section>
  );
};

export default BugList;
