import React from 'react'
import './header.css'



export default function Header() {
  return (
      <>
      <header>
    <div>
     <span className='logo'>Наш суперкофе</span>
     <ul className='nav'>
         <li>Про нас</li>
         <li>Контакты</li>
         <li>Кабинет</li>
     </ul>
    </div>
    </header>
    <div className='present' ></div>
    </>
   )
}
