import React, {useState} from 'react';
import SimpleAlert from './components/Alert/SimpleAlert';
import ConfirmAlert from './components/Alert/ConfirmAlert';

const App = () => {
  const [open, openSet] = useState(true);
  return (
    <div className='bg-black h-screen pt-10 pl-10'>
      <ConfirmAlert
        isOpen={open}
        onClose={() => openSet(false)}
        onConfirm={() => console.log('Left ..')}
      />
    </div>
  );
};

export default App;
