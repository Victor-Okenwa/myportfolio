import { Modal } from 'bootstrap';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useEffect, useRef } from 'react';

const MyModal = () => {
    const showModal = useStoreState((state) => state.showModal)
    const handleModalClose = useStoreActions((action) => action.handleModalClose);
    const modalRef = useRef(null);

    useEffect(() => {
        if (showModal) {
            const modalElement = document.getElementById('myModal');
            if (modalElement) {
                modalRef.current = new Modal(modalElement, {
                    backdrop: 'static',
                    keyboard: false
                });
                modalRef.current.show();
            }
        } else if (modalRef.current) {
            modalRef.current.hide();
        }
    }, [showModal]);

    useEffect(() => {
        // Clean up the modal when the component unmounts
        return () => {
            if (modalRef.current) {
                modalRef.current.dispose();
            }
        };
    }, []);

    return (

        <div id="myModal" className="modal fade">
            <div className="modal-dialog" onClick={handleModalClose}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">My Resume</h5>
                        <button type="button" className="btn-close" onClick={handleModalClose}></button>
                    </div>
                    <div className="modal-body">
                        <iframe
                            src="/okenwa_victor_resume.pdf"
                            width="100%"
                            height="600px"
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyModal;
