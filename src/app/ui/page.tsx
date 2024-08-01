'use client';

import React, { useState } from 'react';

// import { Button } from '@gofynd/nitrozen-react';
// import styled from 'styled-components';

import { Input } from '@/components/UI';

import type { Component } from '@/types';
import type { ChangeEvent } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

// const StyledCode = styled(Code)`
//   margin: auto;
//   width: 30%;
//   height: 50%;

//   .n-code-input-field {
//     color: black;
//     border: 1px solid green;
//   }
// `;

// const StyledCodeError = styled(Code)`
//   margin: auto;
//   width: 30%;
//   height: 50%;

//   .n-code-input-field {
//     color: red;
//     border: 1px solid red;
//   }
// `;

// const StyledCommonDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 20px;
// `;

// const StyledDialog = styled(Dialog)`
//   margin: auto;
// `;

// const StyledInputBox = styled.div`
//   width: 40%;
//   margin: 0 auto;
// `;

const UI: Component = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/* <h1>Common Components</h1>
      <br />
      <h4>1.Image component</h4>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image src="" alt="Picaso" width={100} height={100} style={{ margin: 'auto' }} />
        <Image
          className="demo"
          src="https://picsum.photos/200/300"
          alt="Picaso"
          width={100}
          height={100}
          style={{ color: 'red', background: 'blue', margin: 'auto' }}
        />
      </div>
      <br />
      <h4>2.OTP Input component</h4>
      <br />

      <StyledCode
        className="demo"
        codeId="test"
        fields={4}
        getCode={() => {}}
        hideValidation
        label="OTP"
        validationState="success"
        helperText="helperText"
        validationLabel="Meow meow"
      />
      <StyledCode
        className="success"
        codeId="test"
        fields={4}
        getCode={() => {}}
        // hideValidation
        label="OTP"
        validationState="success"
        // helperText="helperText"
        validationLabel="OTP successfully verified"
      />
      <StyledCodeError
        className="error"
        codeId="test"
        fields={4}
        getCode={() => {}}
        // hideValidation
        label="OTP"
        validationState="error"
        // helperText="helperText"
        tooltip="pop"
        validationStyle={{
          background: 'white',
        }}
        validationLabel="Please re-check and enter the correct otp"
      />

      <br />
      <h4>3. Dialog</h4>
      <br />
      <Button onClick={() => setOpen(true)}>Show Dialog</Button>
      <StyledDialog
        isVisible={open}
        title="Dummy Title"
        className="demo"
        kind="dialog"
        size="m"
        closeHandle={() => setOpen(false)}
        positiveButtonLabel="Proceed"
        isClosable
        negativeButtonLabel="Close"
        onNegativeResponse={() => setOpen(false)}
        onPositiveResponse={() => setOpen(false)}
      >
        <p>Dummy Content</p>
      </StyledDialog>
      <StyledInputBox> */}
      <div style={{ width: '400px', margin: '0 auto' }}>
        <h4>4. Input Cases</h4>
        <br />
        <Input
          label="GST Number"
          placeholder="Placeholder"
          value={value}
          onChange={handleChange}
          required
          maxLength={15}
          helperText="Helper Text"
          tooltip="A GST number is required to sell products with Reliance."
          showCounter
          id="gst"
        />
        <br />
        <Input
          label="GST Number"
          placeholder="Placeholder"
          value={value}
          onChange={handleChange}
          required
          maxLength={15}
          helperText="Error Text"
          tooltip="A GST number is required to sell products with Reliance."
          showCounter
          error
          errorText="Error Text"
        />
      </div>
      {/* </StyledInputBox> */}
      <Button variant="contained" disabled>
        Continue
      </Button>
    </div>
  );
};

export default UI;
