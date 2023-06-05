import React from "react";
import Button from "./Button";
import "./Form.css";

export default function Form() {
  return (
    <div className='form-wrapper'>
      <form action=''>
        <input className='input' type='email' />
        <Button className='btn btn-medium' title='Start now' />
      </form>
    </div>
  );
}
