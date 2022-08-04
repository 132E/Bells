import BugCard from "../components/BugCard";

const BugList = ({ bugs }) => {
  return (
    <section>
      <h1>Bugs</h1>
      {bugs.map((bug) => {
        return <BugCard bug={bug} />;
      })}
    </section>
  );
};

export default BugList;
