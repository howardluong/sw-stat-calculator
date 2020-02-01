import React, { useState }from 'react';
import './App.css';
import { CreateMonsterBtn } from './components/CreateMonsterBtn';
import { CreateMonsterBox } from './components/CreateMonsterBox/CreateMonsterBox';
import { InputSPD } from './components/CreateMonsterBox/InputSPD/InputSPD';


function App() {
  const [isCreateMonsterBoxOpen, setIsCreateMonsterBoxOpen] = useState(false);
  const [innateStats, setInnateStats] = useState({
    monsterInnateStats: {
      hp: null,
      atk: null,
      def: null,
      spd: 123,
      critRate: null,
      critDmg: null,
      acc: null,
      res: null
    }
  });



  return (
    <div className="App">
      <div style={{ position: 'absolute', top: '10%', left: '30%'}}>
        {innateStats.monsterInnateStats.spd}
      </div>
      <CreateMonsterBtn setIsCreateMonsterBoxOpen={setIsCreateMonsterBoxOpen} />
      { isCreateMonsterBoxOpen ? 
        (<CreateMonsterBox setIsCreateMonsterBoxOpen={setIsCreateMonsterBoxOpen} innateStats={innateStats} setInnateStats={setInnateStats}>
          </CreateMonsterBox>) : (null) }
    </div>
  );
}

export default App;
