import React, { useState } from 'react';
import { Section, Form, ContainerInput, Input, Button } from './style';

function App() {
  const [error, setError] = useState(false);
  const [errorAlert, setErrorAlert] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [convertedValue, setConvertedValue] = useState('');

  function handleConvert(e) {
    e.preventDefault();
    
    setConvertedValue('');

    if(!!inputValue) {
      if (inputValue.match(/^[0-1]+$/g) === null) {
        setError(true);
        setErrorAlert('Ops... only 0 or 1!');
        return;
      }

      if(inputValue.length <= 8) {

        setConvertedValue(parseInt(inputValue, 2));

      } else {
        setError(true);
        setErrorAlert('Maximum 8 digits');
        return;
      }      
    } else {
      setError(!error);
      setErrorAlert('Value not found.');
      return;
    }
  }

  return (
    <Section>
      <h1>BINARY TO DECIMAL</h1>
      <p>converter</p>
      <Form onSubmit={handleConvert}>
        <ContainerInput error={error}>
          {!!errorAlert && <label>{errorAlert}</label>}
          <Input type="text" name="converter" placeholder="Convert now..." onChange={e => [setInputValue(e.target.value), setError(false)]} />
          <Button type="submit">CHANGE</Button>
        </ContainerInput>
      </Form>
      <span>{`Decimal value: ${convertedValue}`}</span>
    </Section>
  );
}

export default App;
