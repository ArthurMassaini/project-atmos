import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function FormLogin() {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Digite seu e-mail"
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">
          Senha
        </Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Digite sua senha"
        />
      </FormGroup>
      <Button>Entrar</Button>
    </Form>
  );
}

export default FormLogin;
