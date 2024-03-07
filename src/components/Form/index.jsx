import { useState } from 'react';
import styles from './Form.module.css';

export const Form = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
      
    // Adiciona o valor digitado no input para renderizar na pagina (tag span).
    const addName = (e) => {
        setName(e.target.value)
    }

    // Adiciona o valor digitado no input para renderizar na pagina (tag span).
    const addEmail = (e) => {
        setEmail(e.target.value)
    }

    // Válidação de dados Email e Nome
    const sendForm = () => {
        if(!name || !email){
            alert('Prencha os campos');
        } else {
            alert('Dados enviados com sucesso')
            setName('');
            setEmail('');
        }
    }

     // Previnir perca de dados no carregamento da página
     const prevForm = (e) => {
        e.preventDefault();
        sendForm();
    }
    
    return (
        <>
        <form onSubmit={prevForm} className={styles.form}>
            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="Seu Nome" value={name} onChange={addName}/>
            <label htmlFor="email">E-mail:</label>
            <input type="email" placeholder="Digite seu email" value={email} onChange={addEmail} />
            <input type="submit"/>
        </form>

        <span>Nome: {name}</span><br/>
        <span>Email: {email} </span>
        </>
    );
}