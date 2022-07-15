const filter = ({ filter, onChange }) => {
  <input
    type="text"
    name="filter"
    value={filter}
    onChange={onChange}
    className="filter"
  />;
};

export default filter;
