import EventEmitter from 'eventemitter3';
import {useEffect, useRef} from "react";
const eventEmitter = new EventEmitter();
const Emitter = {
    on: (event, fn) => eventEmitter.on(event, fn),
    once: (event, fn) => eventEmitter.once(event, fn),
    off: (event, fn) => eventEmitter.off(event, fn),
    emit: (event, payload) => eventEmitter.emit(event, payload),
};
Object.freeze(Emitter);
export default Emitter;

const clickPath = "http://localhost:1234/click.wav"

export const AudioPlayer = () => {
    const audio = useRef(null)
    const audioTag = useRef(null)
    useEffect(()=> {
        Emitter.on('button:click', ()=>{
            if (audioTag.current === null) {
              return
            }
          audioTag.current.pause()
          audioTag.current.currentTime = 0
          audioTag.current.play().then(()=>{console.log('Audio started from method 1')})
          console.log('Audio played from method 1')
        })
        Emitter.on('button:click:alt', ()=>{
          if (audio.current === null) {
            audio.current = new Audio(clickPath)
          }
          audio.current.pause()
          audio.current.currentTime = 0
          audio.current.play().then(()=>{console.log('Audio started from method 2')})
          console.log('Audio played from method 2')
        })
        Emitter.on('button:click:alt:alt', ()=>{
          new Audio(clickPath).play().then(()=>{console.log('Audio started from method 3')})
          console.log('Audio played from method 3')
        })
        return () => {Emitter.off('button:click');Emitter.off('button:click:alt');Emitter.off('button:click:alt:alt')}
    }, [])
    return (
        <audio ref={audioTag} src={clickPath} preload="auto" />
    )
}
