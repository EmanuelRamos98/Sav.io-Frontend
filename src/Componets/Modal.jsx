import React from 'react'
import { useModal } from '../Context/ModalContext'


const Modal = ({ children }) => {
    const { isOpen, closeModal, content } = useModal()
    if (!isOpen) return null


    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                position: 'relative',
                minWidth: '300px'
            }}>
                <button onClick={closeModal} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                    background: 'none',
                    fontSize: '18px',
                    cursor: 'pointer'
                }}>✖</button>
                {content}
            </div>
        </div>
    );
}

export default Modal