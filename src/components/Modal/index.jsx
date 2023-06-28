import "./Modal.css";

const Modal = ({ open, setOpen, selected }) => {
    if (!open) return null;

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="Modal-container" onClick={handleClose}>
            <div className="Modal-content">
                <span className="Modal-close" onClick={handleClose}>X</span>
                <h2 className="Modal-title">¡Buena elección!</h2>
                <div className="Modal-body">
                    <div className="Modal-half left">
                        <p className="Modal-text">Muchas gracias por visitar esta pequeña demostración. Espero que perdonen la falta de detalles. ¡Abrazo!</p>
                    </div>
                    <div className="Modal-half">
                        <img
                            src={selected.url}
                            alt={"Arte seleccionado"}
                            className="Modal-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
