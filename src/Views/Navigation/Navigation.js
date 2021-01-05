import React from 'react'
import './Navigation.css';

const Navigation = props => {

    const tabNames = ['Projects', 'Skills', 'Experience', 'Contact'];
    const { currentTab, setCurrentTab } = props;
    
    return (
      <nav>
        <div className="tabs">
          {
            tabNames.map(t => <Tab key={t} name={t} currentTab={currentTab} changeTab={setCurrentTab}/>)
          }
        </div>
      </nav>
    );
}

const Tab = props => {
  const { name, currentTab, changeTab } = props;
  let active = currentTab === name;
  return (
    <button className={`tab ${active ? 'active' : ''}`} onClick={() => changeTab(name)}>
      {name}
    </button>
  );
};

export default Navigation;