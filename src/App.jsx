import React, {useState} from 'react';
import AlertDialog from './components/AlertDialog/AlertBox';
import AppDrawer from './components/AppDrawer/appDrawer';
import GuiBox from './components/Box';
import GuiCheckbox from './components/Checkbox/guiCheckbox';
import GuiChip from './components/Chip/guiChip';
import ConfirmDialog from './components/ConfirmDialog/confirmDialog';
import DeleteDialog from './components/DeleteDialog/deleteDialog';

const App = () => {
  const [open, openSet] = useState(true);
  return (
    <div className='bg-black h-screen pt-10 pl-10'>
      <AlertDialog isOpen={true} isOpenSet={() => openSet(false)} />
    </div>
  );
};

export default App;
