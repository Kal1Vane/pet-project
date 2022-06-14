import {  Skeleton } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { DataDay, formatNumber } from '../../const';
import './timer.css';

function Timer (data: DataDay):JSX.Element {
  const [mounth,setMounth] = useState<number>(0);
  const [days,setDays] = useState<number>(0);
  const [hours,setHours] = useState<number>(0);
  const [minutes,setMinutes] = useState<number>(0);
  const [seconds,setSeconds] = useState<number>(0);

  useEffect(() => {
    longNewYear();
  },[]);

  useEffect(() => {
    const interval = setInterval(timerUpdatePerSecond,1000);
    return () => clearInterval(interval);
  },[seconds]);

  function longNewYear(){
    const nowDate = dayjs();

    const howLongToDate = dayjs(`${dayjs().get('year')}-${data.data}`);

    const timeSeconds = howLongToDate.diff(nowDate,'seconds');
    const timeMinutes =  Math.floor(timeSeconds / 60);
    const timeHourse = Math.floor(timeMinutes / 60);
    const timeDays = Math.floor(timeHourse / 24);

    setMounth(Math.floor(timeDays / 30));
    setDays(Math.floor(timeDays));
    setHours(24 - nowDate.get('hours'));
    setMinutes(60 - nowDate.get('minute'));
    setSeconds(60 - nowDate.get('seconds'));
  }

  function timerUpdatePerSecond(){
    if (seconds <= 0){
      timerUpdatePerMinute();
      setSeconds(60);
    } else {
      setSeconds((prev) => prev - 1);
    }
  }
  function timerUpdatePerMinute(){
    if (minutes <= 0){
      setMinutes(60);
      longNewYear();
    } else {
      setMinutes((prev) => prev - 1);
    }
  }

  if (seconds === null){
    return (
      <Skeleton
        sx={{ bgcolor: '#00a86b' }}
        variant="rectangular"
        width={210}
        height={118}
        animation="wave"
      />
    );
  }

  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <div className="timer-item">
          <span className="timer-title">{formatNumber(mounth)}</span>
          <span className="timer-subtitle">mounth</span>
        </div>
        <div className="timer-item">
          <span className="timer-title">{formatNumber(days)}</span>
          <span className="timer-subtitle">days</span>
        </div>
        <div className="timer-item">
          <span className="timer-title">{formatNumber(hours)}</span>
          <span className="timer-subtitle">hours</span>
        </div>
        <div className="timer-item">
          <span className="timer-title">{formatNumber(minutes)}</span>
          <span className="timer-subtitle">minutes</span>
        </div>
        <div className="timer-item">
          <span className="timer-title">{formatNumber(seconds)}</span>
          <span className="timer-subtitle">seconds</span>
        </div>
      </div>
    </div>

  );
}
export default Timer;
