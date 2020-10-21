import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const BuildingList = ({order}) =>{
    const attributeLookUp = {
        hash: '#', city: 'City', Country: 'Country', 
        allBuildings: 'All Buildings', 100: '100m+', 
        150: '150m+', 200: '200m+',300: '300m+',telecomTowers: 'Telecom Towers',allStructures:'All Structures'
    };

    const [buildings, setBuildings] = useState([]);

    useEffect(()=>{
      fetch(`http://localhost:8080/?order=${order}`)
      .then(res => res.json())
      .then((data) => {
        setBuildings(data)
      })
      .catch(console.log);
    },[]);

    return (
        <div>
          <table>
            <thead className="building-table">
              <tr>
                  {
                      Object.keys(attributeLookUp).map(a => <th>{attributeLookUp[a]}</th>)
                  }
              </tr>
            </thead>
            <tbody>
              {buildings.map((building) => (
                    <tr>
                        {
                            Object.keys(attributeLookUp).map(
                                k => (
                                <th>{building[k]}</th>
                                )
                            )
                        }
                    </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default BuildingList;