import React from "react"
import styled from "styled-components"
import useForm from "../../../hooks/useForm"
import { login } from "../../../services/User"

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:200px;
    margin:auto;
    input{
        padding:10px;
        margin:5px;
    }
`

const LoginPage = () => {

    const { form, onChange } = useForm({
        email: "",
        password: "",
    })


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log('form', form)
        login(form)
    }

    return (
        <Container>
            <form onSubmit={onSubmitForm}>
                <input
                label={"email"}
                required
                onChange={onChange}
                name={"email"}
                value={form.email}
                placeholder="E-mail"
                />
                <input
                label={"password"}
                required
                onChange={onChange}
                name={"password"}
                vlue={form.password}
                placeholder={"senha"}
                />
                <button
                    type={"submit"}
                    >
                Login!
                </button>
            </form>
        </Container>
    )
}
export default LoginPage