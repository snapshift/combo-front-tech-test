import './index.css';

import ReactDOM from 'react-dom/client';

import Exercice3 from './exercices/exercice-3/exercice-3.tsx'

const ExercicesComponentMap = {
  "3": <Exercice3 />,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {ExercicesComponentMap[process.env.REACT_APP_EX]}
  </div>
);


