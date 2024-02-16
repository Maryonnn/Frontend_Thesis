import { Navbar,Container,Image,FloatingLabel,Form,Button } from 'react-bootstrap';
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

function Choices(){
    return(
        <>
            <Navbar className='p-3'>
                <Container>
                    <Image src='assessmate.png' alt='' className='question-image'/>
                    <IoLogOut size={34} className='btn-icons' />
                </Container>
            </Navbar>
            <hr className="border-4" />
            <Container>
                <div className='mb-3'>
                    <Form.Group>
                        <Form.Label className='fw-bold mt-5 ms-2'>Select Question</Form.Label>
                        <FloatingLabel label="Select Question :">
                            <Form.Select>
                                <option value="1">Question 1</option>
                                <option value="2">Question 2</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className='mb-5'>
                    <Form.Group>
                        <Form.Label className='fw-bold mt-2 ms-2'>Select Criteria</Form.Label>
                        <FloatingLabel label="Select Rubrics :">
                            <Form.Select >
                                <option value="1">Criteria 1</option>
                                <option value="2">Criteria 2</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button className='bttn fw-bold p-2 rounded-3'><FaCircleCheck size={20} className='mb-1 p-0' />&nbsp;Start Checking</Button>
                </div>
            </Container>
            <Navbar fixed="bottom" className='nav-bottom'>
                <Container className='d-flex justify-content-around p-1'> 
                    <FaFileCircleQuestion size={32} className='btn-icons' />
                    <FaCamera size={32} className='btn-icons' />
                    <FaClipboardList size={32} className='btn-icons' /> 
                </Container>
            </Navbar>
        </>
    );
}

export default Choices;