import React from 'react';
import { useRouter } from 'next/router'

import { Pane, Input, FormError } from "@moai/core";
import { Field, Formik, ErrorMessage, FormikErrors, FormikHelpers } from "formik";

import Layout from "../../components/Layout";
import styles from "./Login.module.css";
import SubmitButton from '../../components/SubmitButton';

import ERRORS from "../../errors/login";

type FormValues = {
    email: string;
    password: string;
};

export default function Login() {
    const router = useRouter();

    const email = (
        <div>
            <label htmlFor="fm-email">Email</label>
            <Field id="fm-email" type="text" name="email" as={Input} />
            <ErrorMessage name="email" component={FormError} />
        </div>
    );

    const password = (
        <div>
            <label htmlFor="fm-password">Password</label>
            <Field id="fm-password" type="password" name="password" as={Input} />
            <ErrorMessage name="password" component={FormError} />
        </div>
    );

    const validate = (values: FormValues): FormikErrors<FormValues> => {
        const errors: FormikErrors<FormValues> = {};
        const { email, password } = values;

        if (!email) {
            errors.email = ERRORS.emailRequired;
        }
        if (!password) {
            errors.password = ERRORS.passwordRequired;
        }

        return errors;
    };

    const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        setSubmitting(false);
        alert(JSON.stringify(values));
        router.push("/");
    };

    return (
        <Layout>
            <div className={styles.container}>
                <Pane>
                    <Formik<FormValues>
                        initialValues={{ email: "", password: "" }}
                        onSubmit={onSubmit}
                        validate={validate}
                        children={({
                            isSubmitting: busy,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit} className="w-80 flex flex-col gap-3.5">
                                {email}
                                {password}
                                <SubmitButton
                                    busy={busy}
                                >
                                    Sign in
                                </SubmitButton>
                            </form>
                        )}
                    />
                </Pane>
            </div>
        </Layout>
    )
}
