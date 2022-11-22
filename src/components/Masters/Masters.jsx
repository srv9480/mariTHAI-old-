import React, { useState } from 'react';
import people from './data';
import './styles.less';
import master1 from '../../assets/images/Master1.jpg';
import master2 from '../../assets/images/Master2.jpg';
import master3 from '../../assets/images/Master3.jpg';
import master4 from '../../assets/images/Master4.jpg';

function Masters() {
  const [index, setIndex] = useState(0);
  const {
    name, job, image, text,
  } = people[index];

  return (
    <div className="main-masters-container">
      <div className="main-masters">
        <div className="img-container">
          <img src={master1} alt={name} className="person-img" />
        </div>
        <div className="name-master">
          Мастер Кеу
        </div>
        {/* <div className="job">{job}</div> */}
        <div className="info">Кеу первоклассный специалист, владеет уникальными методами детального прорабатывания тела, очень востребована среди спортсменов.</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master2} alt={name} className="person-img" />
        </div>
        <div className="name-master">Мастер Нан</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">
						 Массаж в исполнение Нан способен улучшить общее состояние здоровья, повысить жизненный тонус и зарядить Вас энергией на долгое время.					</div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master3} alt={name} className="person-img" />
        </div>
        <div className="name-master">Мастер Тан</div>
        {/* <div className="job">{job}</div> */}
        <div className="info">
						  Мастер Тан выполняет тайский традиционный массаж, массаж спины и массаж ног. В ее исполнении тайский традиционный массаж в меру сильный без болезненных ощущений.					</div>
      </div>
    </div>
  );
}

export default Masters;
