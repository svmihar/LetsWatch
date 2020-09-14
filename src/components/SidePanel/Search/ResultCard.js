import React from 'react';
import { Html5Entities } from 'html-entities';

const htmlEntities = new Html5Entities();

const ResultCard = ({result, index, handleOnClick}) => {
    
    return (
            <div className="card flex-shrink-0 mx-auto mb-2" key={index} alt={ htmlEntities.decode(result.id.videoId) } onClick={handleOnClick}>
                <div className="d-flex flex-row no-gutters">
                    <div className="d-flex" style={{width: '40%', maxWidth: '40%'}}>
                        <img src={ htmlEntities.decode(result.snippet.thumbnails.high.url) } class="card-img" alt="..."/>
                    </div>
                    <div className="d-flex" style={{width: '60%', maxWidth: '60%'}}>
                        <div className="card-body">
                            <span className="card-title">{ htmlEntities.decode(result.snippet.title) }</span>
                            <p className="card-text"><small className="text-muted">{ htmlEntities.decode(result.snippet.channelTitle) }</small></p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ResultCard;