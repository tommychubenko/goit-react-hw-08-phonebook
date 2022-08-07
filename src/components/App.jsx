import { useState, useEffect } from 'react';
import ContactForm from './contactForm';
import Filter from './filter';
import MarkUp from './markUp';

const App = () => {
  const [filter, setFilter] = useState('');

  // -------------- Фунція зміни інпуту відповідно до стейту

  const onChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  return (
    <div className="container">
      <ContactForm />
      <Filter onChange={onChange} filter={filter} />
      <MarkUp filter={filter} />
    </div>
  );
};
// }
export default App;
