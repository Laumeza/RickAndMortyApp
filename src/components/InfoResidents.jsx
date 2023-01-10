import axios from 'axios';
import React, { useEffect, useState } from 'react';


const InfoResidents = ({url}) => {

    const [searchResident, setSearchResident] = useState({});

    useEffect(() => {
        {/*const randomId = Math.floor(Math.random() * 126) + 1;*/}
        axios.get(url)
        .then(res => setSearchResident(res.data));
        
    }, [])

    console.log(searchResident)

    const colorStatus = () => {
        if (searchResident.status === "Alive"){
            return "chartreuse"
        } else if (searchResident.status === "Dead"){
            return "red"
        } else {
            return "grey"
        }
    }

    return (
        <div className='resident__card'>
            <img src={searchResident.image} alt="" className='img__card'/>
            <h3 className='tittle__residents'>{searchResident.name}</h3>
            <div className='info__status'>
                <div className='status' style={{backgroundColor: colorStatus()}}>
                </div>
                <p>{searchResident.status}</p>
            </div>
            <ul className='info__residents'>
                <li>Specie: {searchResident.species}</li>
                <li>Origin: {searchResident.origin?.name}</li>
                <li>Episodes where appear: {searchResident.episode?.length}</li>
            </ul>
            
        </div>
    );
};

export default InfoResidents;