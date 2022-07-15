const filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      className="filter"
    />
  );
};

export default filter;
