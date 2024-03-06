import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Components/Header/Header.js'
import Card from './Components/Card/Card.js'

function App() {

  const [monState, setMonState] = useState([
  ])

  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();


  function creationCarte(e) {
    e.preventDefault();
    const nvTab = [...monState, {tache: tache, txt: txt}]
    setMonState(nvTab)
    setTache('')
    setTxt('')
  }

  function supprCarte(index) {
    const tabNettoyage = [...monState]

    setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))
  }

  return (
    <div>

      <Header />

      <div className="container px-3">
        <h2 className="title mt-5">Rentrez vos tâches à faire</h2>
      </div>

      <form action="" onSubmit={creationCarte}>
        <div className="field">
          <div className="control">
            <label htmlFor="tache" className='label'>Tâche</label>
              <input className='input' type="text" id='tache' placeholder='Une tâche à faire' onChange={e => setTache(e.target.value)} value={tache}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label htmlFor="txt" className='label'>Contenu de la tâche</label>
            <textarea className='textarea' type="text" id='txt' placeholder='Une tâche à faire' onChange={e => setTxt(e.target.value)} value={txt}></textarea>
          </div>
        </div>
        <div className="control">
          <button type='submit' className='button is-link'>Créer une tâche</button>
        </div>
      </form>

      {
        monState.map(
          (todo, index)=>(<Card 
            key={index}
            index={index}
            tache={todo.tache} 
            txt={todo.txt} 
            supprFunc={supprCarte} />)
          )
      }

      

    </div>
  );
}

export default App;
