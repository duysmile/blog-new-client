import React from 'react'

import { Pane, Input, TextArea, FormError, Button } from "@moai/core"
import { Field, Formik, ErrorMessage } from "formik";

import Layout from "../../components/Layout";
import styles from "./Login.module.css"
import SubmitButton from '../../components/SubmitButton';

export default function Login() {
    const email = (
        <div>
            <label htmlFor="fm-title">Email</label>
            <Field id="fm-title" type="text" name="email" as={Input} />
            <ErrorMessage name="email" component={FormError} />
        </div>
    );

    return (
        <Layout>
            <div className={styles.container}>
                <Pane>
                    <Formik
                        initialValues={{ title: "", message: "" }}
                        onSubmit={async (values, { setSubmitting }) => {
                            setSubmitting(false);
                            alert("ok");
                        }}
                        children={({
                            isSubmitting: busy,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit} className="w-80">
                                {email}
                                <div className="my-1">
                                    <SubmitButton>
                                        Sign in
                                    </SubmitButton>
                                </div>
                            </form>
                        )}
                    />
                </Pane>
            </div>
        </Layout>
    )
}
