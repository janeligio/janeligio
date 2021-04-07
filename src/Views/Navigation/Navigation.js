import React from 'react'
import './Navigation.css';

const Navigation = props => {

  // const tabNames = ['Projects', 'Skills', 'Experience', 'Contact'];
  const tabNames = ['Projects', 'Contact'];
  const { currentTab, setCurrentTab, darkMode } = props;
    
    return (
      <nav>
        <div className={`tabs ${darkMode ? 'dark-1' :''}`}>
          {
            tabNames.map(t => <Tab darkMode={darkMode} key={t} name={t} currentTab={currentTab} changeTab={setCurrentTab}/>)
          }
        </div>
      </nav>
    );
}

const Tab = props => {
  const { name, currentTab, changeTab, darkMode } = props;
  let active = currentTab === name;
  return (
    <button className={`tab ${active ? 'active' : ''} ${darkMode ? 'dark-1' : ''}`} onClick={() => changeTab(name)}>
      {name}
    </button>
  );
};

export default Navigation;