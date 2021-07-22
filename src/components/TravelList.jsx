import React from 'react';
import TravelItem from './TravelItem';
import '../components/TravelList.css';

function TravelList(props) {
    const{travels}=props;
    return (
        <div className='travel-list'>
            {
                travels.map((travel,index)=>{
                    return <TravelItem
                            image={travel.image}
                            name={travel.name}
                            key={index}
                            />
                })
            }
        </div>
    );
}

export default TravelList;
