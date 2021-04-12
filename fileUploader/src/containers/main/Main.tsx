import React, { useState } from 'react'
import { Dropzone } from "components";
import { Table, Navbar } from 'components';
import { HEADERS_ERROR_TABLE } from 'utils';
import './style.css';

const tbodyData = [
  {
    id: "1", 
    items: ["AS47472", "1212", "br1", "ca1", "status1", "john@email.com", "caf1"]
  }, 
  {
    id: "2", 
    items: ["AS91901", "43232", "br2", "ca2", "status2","sally@email.com", "caf2"]
  },
  {
    id: "3", 
    items: ["AS12220", "12723", "br3", "ca3", "status3","maria@email.com", "caf3"]
  },
  {
    id: "4", 
    items: ["AS23423", "12723", "br4", "ca4", "status4","delcio@email.com", "caf4"]
  },
  {
    id: "5", 
    items: ["AS232AS", "12723", "br5", "ca5", "status5","forlan_donavan@email.com", "caf5"]
  },
]

export const Main: React.VoidFunctionComponent = () => {
    const [info, setInfo] = useState({message:"", status:'', data:{}});
    
    return (
      <div className="content">
        <Navbar />
        <div className="content-wrapper">
          <div className="uploader">
            <Dropzone setInfo={setInfo}/>
          </div>
          <div className="feedback">
            <h3>Feedback</h3>
            <div className={info.status}>{info.message}</div>
            {info.status && <Table theadData={HEADERS_ERROR_TABLE} tbodyData={tbodyData}/> }
            { info.status === 'successful' &&
              <div className="operation">
                <button className="failed" onClick={() => setInfo({message:"", status:'', data:{}})}>Cancel</button>
                <button className="successful">Upload</button>
              </div>
            }
          </div>
        </div>
      </div>
    );
}