import { Navbar,Container,Image } from 'react-bootstrap';
import { TbMessage2Question } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

function Question(){
    return(
        <>
            <Navbar fixed='top'>
                <Container>
                    <Image src='assessmate.png' alt='' />
                </Container>
            </Navbar>
            <Navbar fixed="bottom">
                <Container className='d-flex justify-content-around'> 
                    <TbMessage2Question size={36} />
                    <FaCamera size={36} />
                    <FaClipboardList size={36} /> 
                </Container>
            </Navbar>
        </>
    );
}

export default Question;