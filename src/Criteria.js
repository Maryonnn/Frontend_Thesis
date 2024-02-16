import { Navbar,Container,Image,Button } from 'react-bootstrap';
import { FaFileCircleQuestion } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

function Criteria(){
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
                <div className='d-flex justify-content-end me-1'>
                    <Button className='bttn rounded-pill fw-bold'><IoMdAddCircle size={20} className='mb-1 p-0'/>&nbsp;Add Criteria</Button>
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

export default Criteria;