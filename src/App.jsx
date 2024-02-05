import React, {useState} from 'react';
import AlertDialog from './components/AlertDialog/alertDialog';
import AppDrawer from './components/AppDrawer/appDrawer';

const App = () => {
  const [open, openSet] = useState(true);
  return (
    <div>
      <AppDrawer />
    </div>
  );
};

export default App;
