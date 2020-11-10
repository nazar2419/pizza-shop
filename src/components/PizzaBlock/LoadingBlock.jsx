import React from 'react';
import ContentLoader from "react-content-loader"; 

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block" 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
        <circle cx="133" cy="137" r="117" /> 
        <rect x="0" y="273" rx="6" ry="6" width="280" height="26" /> 
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="420" rx="6" ry="6" width="91" height="31" /> 
        <rect x="137" y="410" rx="25" ry="25" width="140" height="46" />
      </ContentLoader>
        )
}

export default LoadingBlock;
