import React from 'react'
import { Tabs ,Button,Upload } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function Tile2() {
  return (
    <div className='containertabs'style={{backgroundColor:'aliceblue',marginLeft:33}}>
      <div className='file' style={{marginTop:12 }}>
        Upload a .csv file        <Upload
    accept=".xlsx,.csv"
    showUploadList={false}
    beforeUpload={(file, fileList) => {
        // Access file content here and do something with it
        console.log(file);
        document.getElementById("replace").innerHTML=file.name;
        return false;
    }}
>  <Button type='primary' style={{border:2  }} > Browse</Button>
</Upload>
        </div>
        <div id="replace" style={{ display:'flex', alignItems:'center',width:434}}>   </div>
      <Tabs  onChange={callback} type="line" >
    <TabPane className='Tile2 Binary' tab="Binary Classification" key="1" >
    
    </TabPane>
    <TabPane className='Tile2 Regression' tab="Regression" key="2">

    </TabPane>
  </Tabs>
  </div>
  )
}
