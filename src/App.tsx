import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import AirSysterm from "./components/AirSystem/AirSysterm";
import BtnPin from "./components/BtnPin/BtnPin";
import InSide from "./components/InsideParameters/inside";
import OutSideParameter from "./components/OutSideParametr/OutSideParameter";
import PeopleParameter from "./components/PeopleParam/people";
import Position from "./components/Position/position";
import ThermalControl from "./components/ThermalControl/ThermalControl";
import "./index.css"


interface AppProps {

}

interface MoonSuitData {
  x: number
  y: number
  z: number

  bpm: number
  vibration: number
  bodytemp: number

  tempin: number
  humin: number
  pressurein: number

  tempout: number
  pressureout: number
  action: string | null
  request_id: number

  tempcontrol: number

  co: number
  o: number
  pressureinairsys: number
  speedflowair: number

  tempbefore: number
  tempafter: number
  speedflowcooling: number

  voltage: number
  current: number

}


const token = "8838986cbf04f69604ebd521e325dde8af8a8ebd"
const key = "99e45e4c-6ccc-4c23-b31a-1d03405a602c"

const App: FunctionComponent<AppProps> = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState<MoonSuitData>();
  const [status, setStatus] = useState("");


  const ws = useRef<WebSocket>();


  useEffect(() => {
    if (!isPaused) {
      ws.current = new WebSocket(
        `ws://localhost/connect/?token=${token}`
      ); // создаем ws соединение

      ws.current.onopen = () => {
        setStatus("Соединение открыто");
        ws.current?.send(
          JSON.stringify({
            action: "getMainMoonsuitParameter",
            request_id: new Date().getTime(),
            key: key,
          })
        );
      }; // callback на ивент открытия соединения
      ws.current.onclose = () => setStatus("Соединение закрыто"); // callback на ивент закрытия соединения

      gettingData();
    }

    return () => ws.current?.close(); // кода меняется isPaused - соединение закрывается
  }, [ws, isPaused]);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (e) => {
      //подписка на получение данных по вебсокету
      if (isPaused) return;

      const message = JSON.parse(e.data);
      if (message.type == "data") {
        setData(message.datas)
      }

      console.log(message)

    };
  }, [isPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        ws.current?.send(
          JSON.stringify({
            action: "getMainMoonsuitParameter",
            request_id: new Date().getTime(),
            key: key,
          })
        );
        console.log("Data was sended");
      }
    }, 700);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (<>
    <div className="flex justify-start text-white">
      <Position x={data?.x} y={data?.y} z={data?.z} />
      <PeopleParameter bpm={data?.bpm} bodytemp={data?.bodytemp} />
      <ThermalControl speedflowcooling={data?.speedflowcooling} tempafter={data?.tempafter} tempbefore={data?.tempbefore} tempcontrol={data?.tempcontrol} />
      <AirSysterm o2={data?.o} co={data?.co} pressure={data?.pressureout} speedflow={data?.speedflowair} temp={data?.tempout}  />
      <InSide current={data?.current} voltage={data?.voltage} humi={data?.humin} pressure={data?.pressurein} temp={data?.tempin} />
      <OutSideParameter vibrations={data?.vibration} />
    </div>
    <div className="flex justify-start text-white">
      <BtnPin skey={key} pin={33} ws={ws.current}>Охлад</BtnPin>
      <BtnPin skey={key} pin={25} ws={ws.current}>Подача</BtnPin>
      <BtnPin skey={key} pin={13} ws={ws.current}>Венты</BtnPin>
      <BtnPin skey={key} pin={14} ws={ws.current}>Помпа</BtnPin>
      {/* <BtnPin skey={key} pin={13} ws={ws.current}>FAN</BtnPin> */}
1
    </div>
  </>
  );
}

export default App;