import React from 'react'
// import Result_table from './Result_Table'
import Result_piechart from './Result_piechart'
import Result_barchart from './Result_barchart'
import Result_table from './Result_table';

function Result() {
  return (
    <div className='container mt-5 ' id='result-container'>
          <br />
          <br />
        <center>
        <div style={{width:"1000px", border:"1px solid gray"}}>
          <center>
          <h3 style={{backgroundColor:"lightblue"}} >Result</h3>
          <p>Candiate 2 won by 2000 votes</p>
          </center>
        </div>

        </center>
        <center>
      <h3 className='mt-5 mb-3'>STATUS</h3>

        </center>
      <Result_table/>
      <center>
      <h3 className='mt-5 mb-3'>GRAPHS</h3>

        </center>
      <div className='flex'>
        <Result_piechart/>
        <Result_barchart/>
      </div>
    </div>
  )
}

export default Result