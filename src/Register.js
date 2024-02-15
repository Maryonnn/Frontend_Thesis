import { Container,Image,FloatingLabel,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function Register(){
    return(
        <>
            <Container>
                <Container className='mt-5'>
                    <Image src='assessmate.png' alt='' className='login-image'/>
                </Container>
                <Container>
                    <FloatingLabel label="Full name" className="mb-2 mt-4">
                        <Form.Control type="text" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel label="Email address" className="mb-2">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel label="Password" className='mb-2'>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <FloatingLabel label="Confirm password" className='mb-4'>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant='primary' className='w-100 d-flex justify-content-center h-100 fw-bold'>Register</Button>
                    <Container className='d-flex justify-content-center mt-4'>
                        <p>Already have an account?&nbsp;</p>
                        <Link to='/'>Login</Link>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Register;