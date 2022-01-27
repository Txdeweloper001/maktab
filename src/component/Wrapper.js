import React from 'react'

import Navbar from './Navbar'
import Table from './Table'


export default function Wrapper() {
    return (
      <div className='wrapper '>
      <Navbar/>

      <div className="row container-fluid">

      <div className="col-6">
      <Table tName={'Maktab nomi'} tType={'text'}/>
      <Table tName={'Maktab manzili'} tType={'text'}/>
      <Table tName={'Maktab raqami'} tType={'text'}/>
      <Table tName={'Maktab qaysi sektorda'} tType={'text'}/>
      <Table tName={'Maktab qaysi MFYda joylashgan'} tType={'text'}/>
      <Table tName={'Maktab yer maydoni'} tType={'text'}/>
      </div>

      <div className="col-6">
      <Table tName={'Maktab derektori ismi'} tType={'text'}/>
      <Table tName={'Maktab derektori ish boshlanagan sana'} tType={'date'}/>
      <Table tName={'Maktab derektori telefon raqami'} tType={'text'}/>
      <Table tName={'Maktab derektori elektron manzili'} tType={'text'}/>
      <Table tName={'Maktab maqomi'} tType={'text'}/>
      <Table tName={'Ta’lim tili'} tType={'text'}/>
      </div>

      </div>

      </div> 
    )
}


