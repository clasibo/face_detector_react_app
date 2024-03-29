import React from 'react';


function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className ='f3'>
                {'The app will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='center pa5' style={{width:'700px'}}>                   
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                    onClick={onButtonSubmit}>                      
                    Detect
                    </button>
                </div>
                
            </div>        
        </div>         
    )
}

export default ImageLinkForm;