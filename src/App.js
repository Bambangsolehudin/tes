import React, { useState } from 'react'
import data from './data.js'

function App() {
  var temp = [];
  var replacer = 'Before';
  var dataCoba = data

  dataCoba.forEach(elmn => {
    setData(elmn)
  })

  function setData(data){
    temp = []
    data.forEach((el,i) => {
      if (i != 0) {
        if (data[i] === data[i - 1]) {
          temp.push(i);
        }
      }
      if (data[i] === data[i + 1]) {
        temp.push(i);
      }
    });
    temp.forEach((e,i) => {
      data[temp[i]] = replacer;
    });
    return data;
  }

  dataCoba.forEach((e,index)=>{
    e.forEach((el,i) => {
      e[0] = 'baris'+(index+1)+ ' '
      e[i] = e[i]+" "
    })
  })

  return (
    <div className='container'>
      <h4 className="text-center my-4">
        Tes Coding
      </h4>
      {
        dataCoba.map((e,index) => {
          return<div className='card p-2 my-2 w-100'>[{e}]</div>
        })
      }
    </div>
  )
}

export default App