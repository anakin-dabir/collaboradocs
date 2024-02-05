import React, {useState} from 'react';
import SimpleAlert from './components/Alert/SimpleAlert';
import ConfirmAlert from './components/Alert/ConfirmAlert';
import GuiButton from './components/GuiButton';

const App = () => {
  const [open, openSet] = useState(true);
  const [loading, loadingSet] = useState(false);
  return (
    <div className=' h-screen pt-10 pl-10 flex gap-2 bg-background-secondary'>
      <div className='w-52'>
        <SimpleAlert isOpen={true} />
      </div>
    </div>
  );
};

export default App;
