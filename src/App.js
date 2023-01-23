import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const images = [
    {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1013/1000/600/",
      thumbnail: "https://picsum.photos/id/1013/250/150/",
    }
    
    ];
    const [mySlider , setMySlider] = useState(images)
    const [Slide , setSlide] = useState(0)


    function myLeft(){
      setSlide(
        Slide == 0 ? mySlider.length - 1 : Slide - 1
      )
    }
    function myRigth(){
      setSlide(
        Slide == mySlider.length - 1 ? 0 : Slide + 1
      )    
    }
   return (
    <div className="App" style={{display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
      <div className='myImgs' style={{width: '400px' , display: 'flex'}}>
        <div onClick={myLeft}>left</div>
         <img src={mySlider[Slide].original} style={{width: '100%'}} alt='a'/>
         <div onClick={myRigth}>rigth</div>
      </div>
      <div className='slider' style={{width: '400px' , display: 'flex'}}>
      {mySlider.map((im , index)=>{
        return <img src={im.thumbnail} style={{width: '100%'}} className={`p-3 ${Slide == index ? "bg-warning" : ''}`} alt='a' onClick={()=>setSlide(index)}/>
      })}
      </div>
    </div>
  );
}

export default App;
