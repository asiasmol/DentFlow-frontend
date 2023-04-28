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
    selectedDate:  string,
    selectedTime: string,
    handleModalClose:()=>void;
};
export  const AddVisitModal: React.FC<Props> = (props:Props) =>{
    return(
                <Modal>
                    <ModalOverlay onClick={props.handleModalClose} />
                    <ModalContent>
                        <ModalHeader>Umów wizytę</ModalHeader>
                        <ModalBody>
                            <AddVisit date= {props.selectedDate} time={props.selectedTime.toString()} handleModalClose={props.handleModalClose}/>
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