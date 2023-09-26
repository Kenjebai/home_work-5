import React, { useState } from 'react';
import './App.css';

export default function Form(){
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@react.com",
    a: "love cats",
  });

  return(
    <div>
      <label>
        firstName:
        <input value={form.firstName} onChange={e =>{
          setForm({
            ...form,
            firstName:e.target.value
          })
        }}></input>
      </label>
      <label>
        lastName:
        <input value={form.lastName} onChange={e =>{
          setForm({
            ...form,
            lastName:e.target.value
          })
        }}></input>
      </label>
      <label>
        email:
        <input value={form.email} onChange={e =>{
          setForm({
            ...form,
            email:e.target.value
          })
        }}></input>
      </label>
      <label>
        a:
        <input value={form.a} onChange={e =>{
          setForm({
            ...form,
            a:e.target.value
          })
        }}></input>
      </label>
      <p>
        {form.firstName}{" "}
        {form.lastName}{" "}
        {form.email}{" "}
        {form.a}
      </p>
    </div>
  )
}
