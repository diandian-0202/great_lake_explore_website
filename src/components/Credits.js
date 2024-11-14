import React from 'react';
import Title from './Title';

function Credits({ scrollPositionHeader}) {
  return (
    <div className="center-div">
        <Title scrollPositionHeader={scrollPositionHeader} text="Credits"/>
        <div className="content-box" >
            <ul>
            <li>        
                Headset Icon: <a href="https://www.flaticon.com/free-icons/headset" title="headset icons">Headset icons created by Kharisma - Flaticon</a>
            </li>
            <li>        
            Great Lakes Image: https://aroundmichigan.com/wp-content/uploads/2023/02/Great-Lakes.png
            </li>
            <li>        
            Background Image: <a href="https://pixnio.com/media/water-texture-surface-wave-fluid">Photo</a> by <a href="https://pixnio.com/author/23ohanzee23">Drazen Nesic</a> on <a href="https://pixnio.com/">Pixnio</a>
            </li>
            <li>        
                Fish Icon: <a href="https://www.flaticon.com/free-icons/fish" title="fish icons">Fish icons created by PLANBSTUDIO - Flaticon</a>
            </li>
            <li>        
                Headset Icon: <a href="https://www.flaticon.com/free-icons/headset" title="headset icons">Headset icons created by Kharisma - Flaticon</a>
            </li>
            </ul>
        </div>;
    </div>
    )
}

export default Credits;