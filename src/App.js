import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



function App() {

  const startPoints = 10;
  const totalPoints = 10;
  const lvl = 10;

  

  const [characheristics, setCharacheristics] = useState([
    {name: 'Интеллект', helper:'Отражение умственных способностей мага: от смекалки до библиотечных знаний. Всё то, что отражает теоретические знания мага. С третьего уровня даёт возможность говорить на других языках, распознавать артефакты.' , value: 1,},
    {name: 'Сила Воли', helper:'Отражает способность персонажа сопротивляться магии и воздействия на разум. С третьего уровня даёт возможность рассеивать иллюзии.', value: 1},
    {name: 'Дух', helper: 'Способность мага переносить изнурительное и долгое сотворение чар. Магическая выносливость, если упрощать. На третьем уровне позволяет сотворять два заклинания за ход.' , value: 1},
    {name: 'Харизма', helper: 'Совокупность психо-эмоциональных качеств персонажей, позволяющее взывать к "сердцам людей". На третьем уровене персонаж получает способность снимать эффекты оглушения или воздействия на разум с других персонажей, если это не магический эффект.', value: 1},
    {name: 'Сила', helper: 'Отражает физическую мощь и крепость тела персонажа. Определяет то, насколько он сильный. На третьем уровне персонаж получает возможность игнорировать урон от одного из ударов/или заклинаний.', value: 1},
    {name: 'Чародейское мастерство', helper:'Отражает талант и способность персонажа сотворять заклинания и его предрасположенность к магии. На третьем уровне персонаж получает дополнительное очко владения школой магии.', value: 1},
    ]);
  

  function onChange(name, value) {
    setCharacheristics(
      characheristics.map(characteristic => {
    if (characteristic.name == name) 
      characteristic.value = value;
    return characteristic; 
  }
  )
    )
  }


  
  return (

    <div className="App">
      <div>
        <p class="h1 mt-5">Калькулятор Kirin-Tor System 0.7</p>
      </div>
      <div class="container mt-5">
     <table class="table">
      <thead>
        <tr>
        <th>Характеристики</th>
        <th>Очки Характеристик</th>
        <th></th>
        <th>Итого</th>
        <th>Потрачено</th>
        </tr>
      </thead>
      <tbody>
      {characheristics.map(characheristic => (
      <tr>
        <td> 
        <OverlayTrigger placement="left" overlay={<Tooltip>{characheristic.helper}</Tooltip>}>
        <span className="overlay-trigger"> {characheristic.name}</span>
        </OverlayTrigger>
        </td>
        <td>
          <input class="form-control text-center" min ="1" max = "10" placeholder = "1" type="number" id="typeNumber"  value={characheristic.value} onChange={e => onChange(characheristic.name, e.target.value) }></input>
        </td>
        <td>
        <p>=</p>
        </td>
        <td>
          <input class="form-control text-center" type="text" value={characheristic.value} readonly disabled ></input>
        </td>
        <td>
          <input class="form-control text-center" type="text" placeholder = "0" readonly disabled></input>
        </td>
      </tr>))}
      </tbody>
     </table>
     <div id="totalPoints" class="h3 text-end">
        <p class="text">Пул очков: {totalPoints}</p>
      </div>
     </div>
     </div>
  );
}

export default App;
