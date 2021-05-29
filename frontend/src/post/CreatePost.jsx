import React from 'react';
import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './post.css';

const CreatePost = (props)=>{

const yupValidation = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().required().min(3).max(10)
})

const initValue = {
    title: "",
    postText: "",
    username: ""
}

const onSubmit = (data)=>{
    axios.post('http://localhost:5000/post', data)
    .then(response=>{
        console.log(response);
    })
}

return(
    <Formik onSubmit={onSubmit} initialValues={initValue} validationSchema={yupValidation}>
        <Form className="box-form">
            <Field className="form-input" name="title" id="title" autoComplete="off"></Field>
            <ErrorMessage className="errorMessage" name="title" component="span"></ErrorMessage>
            <Field className="form-input" name="postText" id="postText" autoComplete="off"></Field>
            <ErrorMessage className="errorMessage" name="postText" component="span"></ErrorMessage>
            <Field className="form-input" name="username" id="username" autoComplete="off"></Field>
            <ErrorMessage className="errorMessage" name="username" component="span"></ErrorMessage>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
)
}

export default CreatePost;