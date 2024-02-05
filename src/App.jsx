import React, {useState} from 'react';
import AlertDialog from './components/AlertDialog/alertDialog';

const App = () => {
  const [open, openSet] = useState(true);
  return (
    <div>
      <AlertDialog open={open} openSet={openSet} message='Are you sure?' heading='Delete' />
    </div>
  );
};

export default App;
