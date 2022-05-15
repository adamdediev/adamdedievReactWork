import { Container } from '@mui/material';
import React from 'react';
import Header from './components/Header/Header';
import Carts from './components/Cart/Carts';
import './index.css'



class App extends React.Component{
  constructor(props){
    super(props)
      this.state={
        items: [{"id":4076,"uid":"a7fe71d8-2749-45ad-ad5e-fa00414ebe04","blend_name":"Strong Utopia","origin":"Raimi, Yemen","variety":"Ennarea","notes":"dense, syrupy, sugar cane, granola, jasmine","intensifier":"dense"},
        {"id":5623,"uid":"9542216c-ba20-45d6-a345-bd0ab441d94d","blend_name":"Reg's Equinox","origin":"Lintong, Sumatra","variety":"SL28","notes":"dull, big, soil, nutmeg, sugar cane","intensifier":"bright"},
        {"id":2978,"uid":"dda18a79-e071-4d06-a7d2-05a7cd60bf2d","blend_name":"Winter Nuts","origin":"Volcan, Panama","variety":"Geisha","notes":"dirty, full, orange, tomato, cranberry","intensifier":"quick"},
        {"id":4176,"uid":"a1e50f91-86bb-4b9c-804a-c4696457397c","blend_name":"Jacked Breaker","origin":"Lintong, Sumatra","variety":"Yellow Bourbon","notes":"quick, smooth, smokey, tamarind, tamarind","intensifier":"juicy"},
        {"id":5222,"uid":"bf795ad9-3db7-44ec-813f-ebd13fef05bf","blend_name":"Heart Mug","origin":"Rulindo, Rwanda","variety":"Blue Mountain","notes":"dense, silky, coconut, kiwi, red grape","intensifier":"deep"},
        {"id":3735,"uid":"cf6c7d81-0527-4df3-aec5-f9f1a1fab11a","blend_name":"The Extract","origin":"Rulindo, Rwanda","variety":"Caturra","notes":"tart, round, fresh bread, bergamot, leathery","intensifier":"wild"},
        {"id":9564,"uid":"73a5ab8a-3328-4393-837e-546240c2cdf7","blend_name":"Winter Enlightenment","origin":"Gayo, Sumatra","variety":"S795","notes":"lingering, full, milk chocolate, mango, cola","intensifier":"deep"},
        {"id":3511,"uid":"6300a437-9b0e-4ad0-8d5d-a5b1b700aa01","blend_name":"Heart Mug","origin":"Kibale, Uganda","variety":"S288","notes":"pointed, watery, black cherry, grapefruit, peach","intensifier":"bright"},
        {"id":5857,"uid":"69a3ec7e-92da-4b8a-8f3f-e44d6ae0bc57","blend_name":"Huggy Cake","origin":"Mount Elgon, Uganda","variety":"Barbuk Sudan","notes":"unbalanced, smooth, sundried tomato, honeydew, blueberry","intensifier":"wild"},
        {"id":6585,"uid":"97d04a3a-e1ce-4323-ab63-65d0f9a53568","blend_name":"Goodbye Blend","origin":"Jinotega, Nicaragua","variety":"Gesha","notes":"crisp, chewy, peanut, toast, nougat","intensifier":"complex"},
        {"id":6741,"uid":"2ef3a8fe-ef90-4716-b957-44f5a37e7556","blend_name":"Bluebery Forrester","origin":"Northern Region, Arusha, Tanzania","variety":"Typica","notes":"juicy, big, baggy, orange creamsicle, raisin","intensifier":"complex"},
        {"id":3632,"uid":"c75bf7a8-601f-4ea1-bf12-3525fb1bce1f","blend_name":"Red Coffee","origin":"Raimi, Yemen","variety":"Tafari-Kela","notes":"complex, watery, cacao nibs, marzipan, coconut","intensifier":"pointed"},
        {"id":3670,"uid":"72cb201c-aa77-46ea-9df0-5d4fcebedf9a","blend_name":"Spilt Nuts","origin":"Northern Region, Arusha, Tanzania","variety":"Catimors","notes":"muted, tea-like, sweet pea, rye, baggy","intensifier":"crisp"},
        {"id":4670,"uid":"c6c8cd23-b2e3-4486-9f2f-4eddff17dcd8","blend_name":"Red ","origin":"Brunca, Costa Rica","variety":"S.4","notes":"astringent, slick, bakers chocolate, grapefruit, baggy","intensifier":"clean"},
        {"id":2060,"uid":"6e9082f6-dcee-4e94-bee0-5dde6b9de268","blend_name":"The Light","origin":"Mattari, Yemen","variety":"Ethiopian Heirloom","notes":"crisp, full, hibiscus, wheat, coconut","intensifier":"crisp"},
        {"id":2782,"uid":"662728b0-aefa-43a3-aef8-d30775a1e0e7","blend_name":"Pumpkin-spice Choice","origin":"Hirazi, Yemen","variety":"Gesha","notes":"dense, big, nutella, nectarine, mint","intensifier":"mild"},
        {"id":9500,"uid":"611ce641-f742-4f07-98a4-c2076b18ae82","blend_name":"Seattle Been","origin":"Madriz, Nicaragua","variety":"Red Bourbon","notes":"dull, chewy, cocoa powder, kiwi, milk chocolate","intensifier":"soft"},
        {"id":3949,"uid":"c2621fd1-a432-479c-8976-836a416e7d7a","blend_name":"Melty Star","origin":"Guanacaste, Costa Rica","variety":"Pink Bourbon","notes":"pointed, smooth, mushroom, black cherry, ginger","intensifier":"rounded"},
        {"id":5485,"uid":"98785ae7-2321-49c1-9986-139849ca7bda","blend_name":"Express Been","origin":"Volcan, Panama","variety":"Sumatara","notes":"juicy, velvety, lime, red currant, lavender","intensifier":"rounded"},
        {"id":97,"uid":"8e742c2c-faae-48b7-94a1-9ca48529198e","blend_name":"Melty Forrester","origin":"Copan, Honduras","variety":"Obata","notes":"soft, tea-like, rye, potato defect!, cranberry","intensifier":"dry"}]
    }
  };
  render(){
  return (
    <Container maxWidth="lg">
    <Header />
    <Carts items ={this.state.items}/>
    </Container>
  );
}
}
export default App;
