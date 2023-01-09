import 'bootstrap/dist/css/bootstrap.css';
import FormGroup  from 'react-bootstrap/FormGroup';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { Facebook, Google, Microsoft } from "react-bootstrap-icons"
import SurfPocketLogo from './SurfPocketLogo.js';

function Login() {
  return (
    <div className='container text-center'>
      <div className='row align-items-center'>
        <Form className='form-signin'>
          <div className='text-center mb-4'>
            <SurfPocketLogo/>
            <h1 class="h3 mb-3 font-weight-normal">Surf Pocket</h1>
            <p>
              Play Real!
            </p>
          </div>
          <FloatingLabel
              controlId="floaringInput"
              label="Email Address"
              className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
              controlId="floaringPassword"
              label="Password" >
            <Form.Control type="password" placeholder="Password"/>
          </FloatingLabel>
          <hr/>
          <FormGroup className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label="Remember me" />
          </FormGroup>
          <hr/>
          <div className='d-grid gap-2'>
            <Button variant="primary" size='lg' type="submit">
              Sign In
            </Button>{' '}
          </div>
          <hr/>
          <div className='text-center mb-4'>
            <p>OR</p>
          </div>
          <hr/>
          <div className='d-grid gap-2'>
            <Button variant='outline-primary' size='lg'>
              <Microsoft/>
            </Button>{' '}
          </div>
          <hr/>
          <div className='d-grid gap-2'>
            <Button variant='danger' size='lg'>
              <Google/>
            </Button>{' '}
          </div>
          <hr/>
          <div className='d-grid gap-2'>
            <Button variant='primary' size='lg'>
              <Facebook/>
            </Button>{' '}
          </div>
          <p class="mt-5 mb-3 text-muted text-center">© 2022</p>
        </Form>
      </div>
    </div>
  );
}

export default Login;