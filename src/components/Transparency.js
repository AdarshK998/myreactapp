import React from 'react'
import {Button, Image} from 'antd'
import { black } from 'color-name'
import img1 from './1.png'
import img2 from './2.png'
export default function Transparency() {
    return (
        <div className="container5" >
            <div style={{fontWeight:700}}>
        Brillio's Responsible AI provides a platform-agnostic explanation AI(XAI) solution which is transparent and accountable. Under the hood, it uses techniques like LIME, SHAP, PDP etc.
            </div>
            <div style={{display:'flex', justifyContent:'space-around', padding:14}}>
                 <div style={{display:'flex',flexDirection:'column', borderWidth:23,borderColor:black}}>
                   <div style={{paddingBottom:22}}>For Detailed Explanations, Click here:  <Button type='link'>Exec level Model Explainer</Button></div>
                   <div>
                    <Image
                    src={img1}
                    preview={false}
                    height={222}
                    width={413}
                    />
                    </div>
                 </div>
                 <div style={{display:'flex',flexDirection:'column', borderWidth:23,borderColor:black}}>
                  <div style={{paddingBottom:22}}>For Detailed Explanations, Click here:  <Button type='link'>DS Team  level Model Explainer</Button></div>
                  <div>
                      <Image
                      src={img2}
                      preview={false}
                      height={222}
                      width={413}
                      />
                  </div>
                 </div>
            </div>

        </div>
    )
}
