import React from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import useForm from "../../hooks/useForm"

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

const AddressRegistrationPage = () => {

    const { form, onChange } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: "",
    })

    const handleAddress = (form) => {
        axios.put(`${BASE_URL}/address`, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                alert("endereco cadastrado!")
            })
            .catch((err) => {
                alert(err)
            })
    }

    const cadastrar = (event) => {
        event.preventDefault()
        handleAddress(form)
        console.log('form', form)

    }


    return (
        <Container>
            <form onSubmit={cadastrar}>
                <input
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"street"}
                    value={form.street}
                    placeholder="rua"
                />
                <input
                    type={"number"}
                    required
                    onChange={onChange}
                    name={"number"}
                    value={form.number}
                    placeholder="numero"
                />
                <input
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    placeholder="bairro"
                />
                <input
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"city"}
                    value={form.city}
                    placeholder="cidade"
                />
                <input
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"state"}
                    value={form.state}
                    placeholder="estado"
                />
                <input
                    type={"text"}
                    required
                    onChange={onChange}
                    name={"complement"}
                    value={form.complement}
                    placeholder="complemento"
                />
                <button
                    type={"submit"}
                >
                    cadastar
                </button>
            </form>


        </Container>
    )
}
export default AddressRegistrationPage