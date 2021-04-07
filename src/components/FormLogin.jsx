import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function FormLogin() {
  const history = useHistory();
  const [getState, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...getState,
      [name]: value,
    });
  };

  const handleClick = () => {
    history.push('/home');
  };

  const verifyEmailAndPassword = () => {
    const { email, password } = getState;

    const regexEmail = new RegExp('.+@[A-z]+[.]com');
    const regexPassword = new RegExp('.{6}');

    if (regexEmail.test(email) && regexPassword.test(password)) {
      return true;
    }
  };

  const buttonEnabled = () => (
    <Button type="button" className="button" onClick={handleClick}>
      Entrar
    </Button>
  );

  const buttonDisabled = () => (
    <Button type="button" className="button" disabled>
      Entrar
    </Button>
  );

  return (
    <Form>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          value={getState.email}
          id="exampleEmail"
          placeholder="Digite seu e-mail"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">
          Senha
        </Label>
        <Input
          type="password"
          name="password"
          value={getState.password}
          id="examplePassword"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
      </FormGroup>
      {verifyEmailAndPassword() ? buttonEnabled() : buttonDisabled()}
    </Form>
  );
}

export default FormLogin;
