import React from "react"
import styled from "styled-components"
import useForm from "../../hooks/useForm"
import { TextField } from "@material-ui/core"
import {Login} from "../../services/User"


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 200px;
margin: auto;
input{
    padding: 10px;
    margin: 5px;
}
`
const SignUpForm = () => {




    const { form, onChange, cleanFields } = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    })



    const cadastrar = (event) => {
        event.preventDefault()
        cleanFields()
        Login(form)
        console.log('form', form)

    }


    return (

        <Container>

            <form onSubmit={cadastrar}>

                <TextField
                    label={"nome"}
                    variant={"outlined"}
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"name"}
                    value={form.name}
                    placeholder="nome e sobrenome" />

                <input
                    type={"email"}
                    required
                    onChange={onChange}
                    name={"email"}
                    value={form.email}
                    placeholder="E-mail" />

                <input
                    pattern={"^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$"}
                    title="digite um cpf válido"
                    required
                    onChange={onChange}
                    name={"cpf"}
                    value={form.cpf}
                    placeholder="000.000.000-00" />

                <input
                    type={"password"}
                    required
                    onChange={onChange}
                    name={"password"}
                    value={form.password}
                    placeholder="senha" />

                <button
                    type={"submit"}
                >Criar</button>

            </form>
        </Container>
    )
}
export default SignUpForm