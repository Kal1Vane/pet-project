import {  CircularProgress } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { DataDay, formatNumber } from '../../const';
import './timer.css';

type TimerProps = {
  data : DataDay,
}
function Timer (data: TimerProps):JSX.Element {
  const [year,setYear] = useState<number>(0);
  const [mounth,setMounth] = useState<number>(0);
  const [days,setDays] = useState<number>(0);
  const [hours,setHours] = useState<number>(0);
  const [minutes,setMinutes] = useState<number>(0);
  const [seconds,setSeconds] = useState<number>(0);
  const [isLoading,setLoading] = useState<boolean>(true);

  useEffect(() => {
    longTimerUpdate();
    setLoading(false);
  },[]);

  useEffect(() => {
    const interval = setInterval(timerUpdatePerSecond,1000);
    return () => clearInterval(interval);
  },[seconds]);

  function longTimerUpdate(){
    const nowDate = dayjs();

    let howLongToDate = dayjs(`${dayjs().get('year')}-${data.data}`);

    let timeSeconds = howLongToDate.diff(nowDate,'seconds');
    if (timeSeconds < 0){
      howLongToDate = dayjs(`${dayjs().get('year') + 1}-${data.data}`);
      timeSeconds = howLongToDate.diff(nowDate,'seconds');
      setYear(1);
    }

    setMounth(howLongToDate.diff(nowDate,'month'));
    setDays(howLongToDate.diff(nowDate,'day'));
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
      longTimerUpdate();
    } else {
      setMinutes((prev) => prev - 1);
    }
  }


  if (isLoading){
    return (
      <div className="timer-wrapper">
        <div className="timer-container">
          <CircularProgress
            color="secondary"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        {year ?
          <div className="timer-item">
            <span className="timer-title">{formatNumber(year)}</span>
            <span className="timer-subtitle">year</span>
          </div> :
          ''}
        {mounth ?
          <div className="timer-item">
            <span className="timer-title">{formatNumber(mounth)}</span>
            <span className="timer-subtitle">mounth</span>
          </div> :
          ''}
        {days ?
          <div className="timer-item">
            <span className="timer-title">{formatNumber(days)}</span>
            <span className="timer-subtitle">days</span>
          </div> :
          ''}
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
