import React, {useState} from 'react';
import SimpleAlert from './components/Alert/SimpleAlert';
import ConfirmAlert from './components/Alert/ConfirmAlert';
import GuiButton from './components/GuiButton';
import GuiTooltip from './components/GuiTooltip';

const App = () => {
  const [open, openSet] = useState(true);
  const [loading, loadingSet] = useState(false);
  return (
    <div className=' h-screen pt-10 pl-10 flex gap-2 bg-background-secondary'>
      <div className='pt-20'>
        <GuiTooltip placement='top-end'>
          <div>Name of component</div>
        </GuiTooltip>
      </div>
    </div>
  );
};

export default App;
