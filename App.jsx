import React,{useState} from 'react';

const App =()=>{
  const [name,setName] = useState('にんじゃわんこ')
  
  return (
  	<div>
  	  <h1>こんにちは、{name}さん！</h1>
  	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
      <button onClick={() => {setName('ひつじ仙人')}}>ひつじ仙人</button>
      
  	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
      <button onClick={() => {setName('にんじゃわんこ')}}>にんじゃわんこ</button>
      
    </div>
  );
}

export default App;