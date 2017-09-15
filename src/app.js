import React from "react";
import {render} from 'react-dom';
import Root from './root/Root.js';
import configureStore from './store/configureStore';
const rtElement=document.getElementById('root');
const store=configureStore();
try{
    render(<Root store={store}/> ,rtElement)
}catch(e){
    console.error(e.stack)
}
if(process.env.NODE_ENV=="development"&&module.hot){
    module.hot.accept('./root/Root.js',()=>{
        const NextApp=require('./root/Root.js').default;
        try{
            render(<NextApp store={store}/> ,rtElement)
        }catch(e){
            console.error(e.stack)
        }
    });

}