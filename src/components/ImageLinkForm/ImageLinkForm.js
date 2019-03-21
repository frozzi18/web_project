import React from 'react';


const ImageLinkForm =()=>{
    return(
        <div>
            <p className='f3'>
                {'This Magic Panda will detect faces in your pictures. Try it'}
            </p>
            <div>
                <input className='f4 pa2 w-70 center' type='tex'/>
                <button>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;