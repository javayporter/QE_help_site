import React from 'react';

export const Modal = () => {
    return(
        <div className="modal-wrapper">
            <div className="modal-header">
                <p>More Info</p>
                <span className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h5>Tool</h5>
                    <p>Here you'll see more info regarding each application</p>
                </div>
                <div className="modal-footer">
                    <button className="close-btn">Close</button>
                </div>
                
            </div>
        </div>
    )
}