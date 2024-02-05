import React from 'react';
import GuiButton from './components/Button';

const App = () => {
  return (
    <div>
      <GuiButton color='primary'>Add new category</GuiButton>
      <GuiButton color='secondary'>Add new category</GuiButton>
      <GuiButton color='success'>Add new category</GuiButton>
      <GuiButton color='error'>Add new category</GuiButton>
      <GuiButton>Add new category</GuiButton>
    </div>
  );
};

export default App;
