import './App.css';
import 'antd/dist/antd.css';
import React  from 'react';
import { Layout } from 'antd';
import Tile2 from "./components/Tile2";
import Headers from "./components/Headers";
import Subtabs1 from './components/Subtabs1';
function App() {
  
  return (
    <div className='App'>
    <Layout className='maincontainer'>
      <div className='container1' >
        <Headers/>
      </div>
   
      <div className='container2'>
       <Tile2/>
      </div>
      <div className='container3'>
        <Subtabs1/>
      </div>
      
    </Layout>
</div>
  );
}

export default App;
