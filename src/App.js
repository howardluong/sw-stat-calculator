import React, { useState }from 'react';
import './App.css';
import { OpenCreateMonsterBoxBtn } from './components/OpenCreateMonsterBoxBtn';
import { CreateMonsterBox } from './components/CreateMonsterBox/CreateMonsterBox';


function App() {
  const [isCreateMonsterBoxOpen, setIsCreateMonsterBoxOpen] = useState(false);
  const [innateStats, setInnateStats] = useState({
    monsterInnateStats: {
      hp: null,
      atk: null,
      def: null,
      spd: null,
      critRate: null,
      critDmg: null,
      acc: null,
      resistance: null
    }
  });


  return (
    <div className="App">
      <div style={{ position: 'absolute', top: '10%', left: '30%'}}>
        {innateStats.monsterInnateStats.spd}
      </div>
      <OpenCreateMonsterBoxBtn setIsCreateMonsterBoxOpen={setIsCreateMonsterBoxOpen} />
      { isCreateMonsterBoxOpen ? 
        (<CreateMonsterBox 
        setIsCreateMonsterBoxOpen={setIsCreateMonsterBoxOpen} 
        innateStats={innateStats} 
        setInnateStats={setInnateStats}
        >
          </CreateMonsterBox>) : (null) }
    </div>
  );
}

export default App;
