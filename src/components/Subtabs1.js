import React from 'react'
import { Tabs } from 'antd';
import Justnesstabs from './Justnesstabs';
import Transparency from './Transparency';
function callback(key) {
    console.log(key);
  }

const { TabPane } = Tabs;

export default function Subtabs1() {
    return (
        <div>
         <Tabs className='alltabs1' defaultActiveKey="1" onChange={callback} type='card' >
    <TabPane className='Justness'  tab= "Justness" key="1" >
      <div style={{display:'flex',flexDirection:'column',textAlign:'left', marginLeft:23}}>
      <div>
        Brillio's Responsible AI follows a structured 2 layered approach for Justness @ Data and Algorithm Level:
      </div>
      <div style={{paddingTop:13}}>
        a) Bias Detection: Automated Framework for detecting bias
      </div>
      <div style={{paddingTop:13}}>
        b) Bias Mitigation: Automated Framework for mitigating bias
      </div>
      </div>
      <div className='container4'>
        <Justnesstabs/>
      </div>
    </TabPane>
    <TabPane className='Transparency'   tab="Transparency" key="2"  >
      
      <Transparency/>
    </TabPane>
    <TabPane className='Privacy'   tab= "Privacy" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
        </div>
    )
}
