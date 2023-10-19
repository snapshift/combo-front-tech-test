import './index.css';

import ReactDOM from 'react-dom/client';

import Exercice1 from './exercices/exercice-1/exercice-1.tsx'
import Exercice2 from './exercices/exercice-2/exercice-2.tsx'
import Exercice3 from './exercices/exercice-3/exercice-3.tsx'

const ExercicesComponentMap = {
  // "1": Exercice1, // use if need UI
  // "2": Exercice2, // use if need UI
  "3": <Exercice3 />,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {ExercicesComponentMap[process.env.REACT_APP_EX]}
  </div>
);


