import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Form/Input";
import InputCurrecy from "./Form/InputCurrency";
import Select from "./Form/Select";
import useForm from "./Hooks/useForm";


function App() {
  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  const name = useForm("name");
  const cpf = useForm("cpf");
  const phone = useForm("phone");
  const email = useForm("email");
  const emailConfirm = useForm("email");
  const rent = useForm();
  const lender = useForm("name");
  const cpfLender = useForm("cpf");
  const phoneLender = useForm("phone");
  const emailLender = useForm("email");
  const emailConfirmLender = useForm("email");
  const rentLender = useForm();
  const [checkbox, setCheckbox] = useState(true)
 
  const [textLender,setTextLender] = useState("")
  const [fields,setFields] = useState("")

  const [school, setSchool] = useState("");
  const [classSchool, setClassSchool] = useState("");

  const cep= useForm("cep");
  const street = useForm("");
  const [numberStreet, setNumberStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [courses, setCourses] = useState("")
  const [coursesOpt, setCoursesOpt] = useState("")


  function validateLender (){
    setCheckbox(true)
    if(lender.validate() && cpfLender.validate() && phoneLender.validate() && emailLender.validate() && emailConfirmLender.validate && phoneLender.value !== phone.value &&  emailLender.value !== email.value && cpfLender.value !== cpf.value && emailLender.value === emailConfirmLender.value && (rentLender.value).length !== 0 && (rentLender.value !== "$0.0")){
      console.log("Send")
      setFields("Cadastro enviado! Olhe seu email ;)")
    }else{
      console.log(setFields("Preencha os campos corretamente"))
    }
  }

  function validadeStudent () {
    if(name.validate() && cpf.validate() && phone.validate() && email.validate() && emailConfirm.validate && email.value === emailConfirm.value) {
      if ( (rent.value).length === 0 || rent.value === "$0.0" || rent.value === "$0.000"){
        setTextLender("Obrigatório ter Garantidor")
        validateLender()
      } else {
        setTextLender("")
        if(checkbox === true){
          validateLender()
        }else{
          setFields("Cadastro enviado! Olhe seu email ;)")
        }
      }
    }else{
      setFields("Preencha os campos corretamente")
    }
  }
  
  function handleSubit (e) {
    e.preventDefault()
    validadeStudent() 
    setTextLender("")
    setFields("")
  }


  const [saveCep, setSaveCep] = useState()
  async function getCep() {
    setSaveCep()
    const cepSend= cep.value
    const cepAPI = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cepSend}`)
    setSaveCep(cepAPI.data)
  }

  const getSchool = async () => {
   const schools = await axios.get(`https://talent-fest-api.herokuapp.com/schools`)
   console.log(schools.data.schools)
   setSchool(schools.data.schools)
  };

  useEffect(() => {
    getSchool()
    
  }, [])
  
  const [listMap, setListMap] = useState()

  function renderCoursers(courses) {
    switch (courses) {
      case "anhembi morumbi":
        return 
      case "cruzeiro do sul":
        return console.log("cruzeiro")
      case "fmu - faculdades metropolitanas unidas":
        return console.log("fmu")
      case "mackenzie":
        return console.log("mackenzie")
     default: 
        return "";   
    }
  }
   
    async function HandleClickRe(e,
      nomeAluno,
      cpfAluno,
      telefoneAluno,
      emailAluno,
      rendaAluno,
      nomeGarantidor,
      cpfGarantidor,
      telefoneGarantidor,
      emailGarantidor,
      rendaGarantidor) {

      e.preventDefault()
      const body = {
        status: "Aprovado",
        nomeAluno: nomeAluno,
        cpfAluno: cpfAluno,
        telefoneAluno: telefoneAluno,
        emailAluno: emailAluno,
        rendaAluno: rendaAluno,
        nomeGarantidor: nomeGarantidor,
        cpfGarantidor: cpfGarantidor,
        telefoneGarantidor: telefoneGarantidor,
        emailGarantidor: emailGarantidor,
        rendaGarantidor: rendaGarantidor,
      }
      const response = await axios.post("https://pravaler-api.herokuapp.com/register", body);
      console.log(response)
    };
    
  return (
    <>
      <form onSubmit={handleSubit}>
        <h1>Aluno</h1>
        <Input id="name" label="Nome Completo" required {...name} />
        <Input id="email" label="E-mail" required {...email}/>
        <Input id="emailConfirm" label="Confirmação de E-mail" required {...emailConfirm}/>
        <Input placeholder="000.000.000-00" mask="999.999.999-99" id="cpf" label="CPF" {...cpf} required/>
        <Input placeholder="(00) 00000-0000" mask="(99)99999-9999" id="phone" label="Celular" required {...phone}/>
        <InputCurrecy id="rent"  label="Renda" config={currencyConfig} {...rent}/>

        <label> Faculdade <Select 
        options={school}
        value={courses}
        setValue={setCourses}
        />{console.log(courses)}
        
        {courses != "" && 
        <>
        {/* <Select 
        options={}
        value={}
        setValue={}
        /> */}
        </>}</label>

        <Input placeholder="Ex.: 00000-000"  mask="99999-999" id="cep" label="CEP" {...cep} required/>
        <button onClick={()=> {getCep()}}>Pesquisar cep</button>
        {console.log(saveCep)}
        { !saveCep && <>
        <Input id="state" label="Estado" {...state} required/>
        <Input id="city" label="Cidade" {...city} required/>
        <Input id="district" label="Bairro"  {...district} required/>
        <Input id="street" label="Rua"  {...street}  required/>
        <Input id="numberStreet" label="Número e complemento : "  {...numberStreet} require/>
        </>  }
        {saveCep && <>
        <p>{saveCep.state}</p>
        <p>{saveCep.city}</p>
        <p>{saveCep.district}</p>
        <p>{saveCep.street}</p>
        <Input id="numberStreet" label="Complemento"  {...numberStreet}/>
        </>}

        <label> Adicionar Garantidor : <input type="checkbox" value="ledercheck" checked={checkbox} onClick={({target}) => {(setCheckbox(target.checked)); } } /> </label>

        { checkbox === true && <>
          <p>{textLender}</p>
        <h1>Garantidor</h1>
        <Input id="lender" label="Nome Completo"  {...lender} />
        <Input id="emailLender" label="E-mail" setValue={saveCep && saveCep.street} {...emailLender} />
        <Input id="emailConfirmLender" label="Confirmação de E-mail" {...emailConfirmLender} />
        <Input placeholder="000.000.000-00" mask="999.999.999-99" id="cpfLender" label="CPF" {...cpfLender} />
        <Input placeholder="(00) 00000-0000" mask="(99)99999-9999" id="phoneLender" label="Celular" {...phoneLender} />
        <InputCurrecy  id="rentLender" label="Renda" config={currencyConfig} {...rentLender} /></>}

        
        <button onClick={(e) => HandleClickRe(e,
          name.value, 
          cpf.value, 
          phone.value,
          email.value,
          rent.value,
          lender.value,
          cpfLender.value,
          phoneLender.value, 
          emailLender.value, 
          rentLender.value)
          }>Enviar</button>
        <p>{fields}</p>
      </form>
    </>
  );
}

export default App;
