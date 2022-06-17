import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute, backgroundArray } from '../../const';
import { randomInteger } from '../../utils/utils';
import './background-changer.css';

function BackgroundChanger() :JSX.Element  {
  const { pathname } = useLocation();

  let arr: string[];
  const [imgBackground,setImgBackground] = useState<string>('');


  function changeBackground() {
    const number = randomInteger(0,4);
    return arr[number];
  }

  if(pathname === AppRoute.Main) {
    arr = backgroundArray.main;
  } else if( pathname === AppRoute.NewYear){
    arr = backgroundArray.newYear;
  } else if (pathname === AppRoute.Summer){
    arr = backgroundArray.summer;
  } else if (pathname === AppRoute.Valentayne){
    arr = backgroundArray.valentayne;
  } else if (pathname === AppRoute.CustomData){
    arr = backgroundArray.customData;
  }

  useEffect(() => {
    setImgBackground(changeBackground());
  },[]);
  useEffect(() => {
    const interval =setInterval(() => {
      setImgBackground(changeBackground());
    },6000);
    return () => clearInterval(interval);
  },[pathname]);
  return (
    <div className='background-wrapper'>
      <img className='background-img' src={imgBackground} alt="react" />
    </div>
  );
}
export default BackgroundChanger;
