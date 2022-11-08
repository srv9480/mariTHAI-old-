import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;
import './PriceDropDown.less';
import ButtonLarge from './../Button/ButtonLarge';
import imageSpaThai from '../../assets/images/image11-images-spaThai.jpg';
import imageSpaExspress from '../../assets/images/image12-images-SpaExspress.jpg';


const item1 = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div
      className='price-dropwdown-name'
    >
      SPA ТАЙСКОЕ НАСЛАЖДЕНИЕ
    </div>
    <div
      style={{
        paddingLeft: 24,
        display: 'flex',
      }}
    >
      <div className='list_price'>
        <div style={{ display: 'flex' }}>
          <div className='i-price_item-right'>
            <div style={{ marginBottom: '10px' }}>от 2900₽</div>
            <div className='button-hide'>
            <ButtonLarge /> 
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item2 = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <div
      className='price-dropwdown-name'
    >
      SPA ЭКСПРЕСС
    </div>
    <div
      style={{
        paddingLeft: 24,
        display: 'flex',
      }}
    >
      <div className='list_price'>
        <div style={{ display: 'flex' }}>
          <div className='i-price_item-right'>
            <div style={{ marginBottom: '10px' }}>от 2300₽</div>
            <div className='button-hide'>
            <ButtonLarge /> 
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const PriceDropDownTwo = () => (
  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header={item1} key="1">
      <div className='price-content'>
        <div className='price-content-img'>
          <img src={imageSpaThai} alt='' width={500} height={400} />
        </div>
        <div className='price-content-text'>
          Настоящий оазис релакса и расслабления!
          Совершите незабываемое путешествие в
          загадочный и волшебный Тайланд!
          Уникальное сочетание процедур позволят
          получить максимальный эффект:
          <br />
          - нежный пилинг "Лотос"
          <br />
          - маска для тела "Папайя"
          <br />
          - расслабляющий массаж
          <br />
          Ультраувлажняющий пилинг для тела Лотос с гранулами жожоба мягко очищает кожу и,
          благодаря целебным экстрактам лотоса и алоэ вера, надолго сохраняет влагу в коже и
          восстанавливает ее гидробаланс. А ярко-оранжевые плоды папайи – манифест тайского лета:
          вечно жизнерадостного, вечно молодого. Нежная, сочная мякоть плода является богатым
          источником полипептида папаина и витамина С. Такая процедура выравнивает структуру
          кожи, придает лучистость и делает ее безупречно мягкой на ощупь.
          Целый час удовольствия и полного релакса. Каждая процедура приятна и полезна сама по себе,
          но вместе они дают просто потрясающий эффект.
        </div>
        <div className='button-hide-off' style={{maxWidth: '180px', margin: '0 auto'}}>
          <ButtonLarge /> 
        </div>
      </div>
    </Panel>
    <Panel header={item2} key="2">
      <div className='price-content'>
        <div className='price-content-img'>
          <img src={imageSpaExspress} alt='' width={500} height={400} />
        </div>
        <div className='price-content-text'>
          Если Вы желаете посетить одну из наших СПА
          процедур, но не располагаете достаточным
          количеством времени — эта процедура именно для
          Вас! Вам предложат выбрать скраб и
          ароматическое масло, а наш мастер сделает
          восхитительный и весьма полезный массаж. Ваша
          кожа будет Вам благодарна! СПА программа включает в себя:
          30 минут расслабляющего массажа + 15 минут арома
          пиллинга
          Ароматы на выбор:
          <br />
          - Сочное манго
          <br />
          - Освежающий лемонграс
          <br />
          - Чистый лотос
          <br />
        </div>
        <div className='button-hide-off' style={{maxWidth: '180px', margin: '0 auto'}}>
          <ButtonLarge /> 
        </div>
      </div>
    </Panel>
  </Collapse>
);
export default PriceDropDownTwo;