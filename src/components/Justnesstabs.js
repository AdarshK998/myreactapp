import React from 'react'
import { Tabs,Button,Upload } from 'antd';
function callback(key) {
    console.log(key);
  }

const { TabPane } = Tabs;

export default function Justnesstabs() {
    return (
        <div>
         <Tabs className='alltabs2'  defaultActiveKey="1" onChange={callback} type='card' >
    <TabPane className='Biasdetection'  tab= "Bias Detection" key="2"  >
      <div style={{textAlign:'left', marginLeft:23}}>
      This framework detects biasness in the uploaded dataset in an automated manner by iterating through all the column in the dataset
      <div style={{display:'flex',justifyContent:'space-between', paddingTop:14 }}>
      <div>
      Select target column <input type="text"/>
      </div>
      <div >
        Favourable Class <input type='text'/>
      </div>
      <div>
        Columns to drop <input type='text'/>
      </div>
      <div>
        <button value='Starting'>Start Bias detection</button>
      </div>
      <div style={{fontStyle:'italic'}}>
       Click here
      <Button type='link'>Bias Detection Analysis</Button> 
     </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',paddingRight:44,paddingTop:14}}>
        <div>
        Post deployment, check the biasness in the incoming dataset through Model Monitoring Techniques: Upload Production .csv file 
        </div>
        <div style={{display:'flex'}}>
          <div id="upload11" style={{paddingRight:12}}>
          </div>
        <Upload
    accept=".xlsx,.csv"
    showUploadList={false}
    beforeUpload={(file, fileList) => {
        // Access file content here and do something with it
        console.log(file);
        document.getElementById("upload11").innerHTML=file.name;
        return false;
    }}
>  <Button type='primary' style={{border:2  }} > Browse</Button>
</Upload>
</div>
</div>
<div style={{fontStyle:'italic',marginLeft:444, paddingTop:33}}>
       Click here
      <Button type='link'>Data drift & Model drift Analysis</Button> 
     </div>
      </div>
    </TabPane>
    <TabPane  className='Biasmitigation'  tab= "Bias Mitigation"  key="3">
      <div style={{textAlign:'left',marginLeft:23}}>
     This Framework mitigates biasness in uploaded dataset in an automated manner by applying pre-processing, In-processing and post processing technique.
     <div className='subtabs22' style={{display:'flex', justifyContent: 'space-between' ,padding:14}}>
       <div>
       Need HPT <input type='text'/>
     </div>
     <div>
       Experiment Name <input type='text'/>
     </div>
     <div>
       Protected Feature <input type='text'/>
     </div>
     <button >Start</button>
     </div>
     <div style={{fontStyle:'italic', paddingTop:34,marginLeft:444 }}>
       Click here
      <Button type='link'>View All Model Experiments with Bias Mitigation</Button> 
     </div>
     </div>
    </TabPane>
  </Tabs>
        </div>
    )
}

