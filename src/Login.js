import { Container,Image,FloatingLabel,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function Login(){
    return(
        <>
            <Container>
                <Container className='mt-5'>
                    <Image src='assessmate.png' alt='' className='login-image'/>
                </Container>
                <Container>
                    <FloatingLabel label="Email address" className="mb-2 mt-4">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel label="Password" className='mb-3'>
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Form.Check label='Remeber me' className='mb-4' />
                    <div className='d-flex justify-content-center rounded-3'>
                        <Button className='w-75 fw-bold bttn'>Login</Button>
                    </div>
                    <Container className='d-flex justify-content-center mt-4'>
                        <p>Don't have an account?&nbsp;</p>
                        <Link to='/register'>Register</Link>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Login;