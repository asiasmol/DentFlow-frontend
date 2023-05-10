import React from "react"
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "./AddVisit.styles";
import AddVisit from "./AddVisit";




type Props = {
    handleModalClose:()=>void;
};
export  const AddVisitModal: React.FC<Props> = (props:Props) =>{
    return(
                <Modal>
                    <ModalOverlay onClick={props.handleModalClose} />
                    <ModalContent>
                        <ModalHeader>Umów wizytę</ModalHeader>
                        <ModalBody>
                            <AddVisit handleModalClose={props.handleModalClose}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button  onClick={props.handleModalClose}>
                                Anuluj
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
)
}