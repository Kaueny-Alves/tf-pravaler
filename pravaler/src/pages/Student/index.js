import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Form/Input";
import InputCurrecy from "./Form/InputCurrency";
import Select from "./Form/Select";
import useForm from "./Hooks/useForm";
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer";


function App() {
  const history = useHistory();

  const routerSimulador = () => {
    history.push("/Simulator");
  };

  const routerHome = () => {
    history.push("/");
  };
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
  const [checkbox, setCheckbox] = useState(false)
 
  const [textLender,setTextLender] = useState("")
  const [fields,setFields] = useState("")

  const [school, setSchool] = useState("");

  const cep= useForm("cep");
  const street = useForm("");
  const numberStreet = useForm("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState()
  const [courses, setCourses] = useState("")
  
  function validateLender (){
    setCheckbox(true)
    if(lender.validate() && cpfLender.validate() && phoneLender.validate() && emailLender.validate() && emailConfirmLender.validate && phoneLender.value !== phone.value &&  emailLender.value !== email.value && cpfLender.value !== cpf.value && emailLender.value === emailConfirmLender.value && (rentLender.value).length !== 0 && (rentLender.value !== "$0.0")){
      console.log("Send")
      sendForm()
      setFields("Cadastro enviado! Olhe seu email ;)")
    }else{
      console.log(setFields("Preencha os campos corretamente"))
    }
  }

  function validadeStudent () {
    if(name.validate() && cpf.validate() && phone.validate() && email.validate() && emailConfirm.validate && cep.validate && numberStreet.validate() && email.value === emailConfirm.value) {
      if ( (rent.value).length === 0 || rent.value === "$0.0" || rent.value === "$0.000"){
        setTextLender("Obrigatório ter Garantidor")
        validateLender()
        console.log('oi carai')
      } else {
        setTextLender("")
        if(checkbox === true){
          validateLender()
        }else{
          console.log( typeof(rent.value))
          sendForm()
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
    score()
  }


  const [saveCep, setSaveCep] = useState()
  async function getCep(e) {
    e.preventDefault()
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

  const [listMapAnhembi, setListMapAnhembi] = useState()
  const [listMapCruz, setListMapCruz] = useState()
  const [listMapFmu, setListMapFmu] = useState()
  const [listMapMac, setListMapMac] = useState()
  const [list, setList] = useState()
  const [option,setOption] = useState("")


  function getCourses() {
    const filteredAnhembi = school.find(school => school.name === "anhembi morumbi")
      setListMapAnhembi(filteredAnhembi.courses)
      console.log(listMapAnhembi)
    const filteredCruz = school.find(school => school.name === "cruzeiro do sul")
      setListMapCruz(filteredCruz.courses)
      console.log(listMapCruz)
    const filteredfmu = school.find(school => school.name === "fmu - faculdades metropolitanas unidas")
      setListMapFmu(filteredfmu.courses)
      console.log(listMapFmu)
    const filteredmac = school.find(school => school.name === "mackenzie")
      setListMapMac(filteredmac.courses)
      console.log(listMapMac)
  }

  function caseSelect() {
    switch (courses) {
      case "mackenzie":
        return setOption(listMapMac)
      case "fmu - faculdades metropolitanas unidas":
        return setOption(listMapFmu)
      case "cruzeiro do sul":
        return setOption(listMapCruz)        
      case "anhembi morumbi": 
        return setOption(listMapCruz)
      default:
        return setOption("")
    }
  }

  const [scoreNumber, setScorenumber] = useState()

  function score () {
    const result = Math.floor(Math.random() * 101)
    if(result > 15){
      setScorenumber("pending")
    }else{
      setScorenumber("reprove")
    }
  }
  

  useEffect(() => {
    getSchool()
  }, [])
 
   
    async function sendForm () {

      const body = {
        status: scoreNumber,
        nomeAluno: name.value,
        cpfAluno: cpf.value,
        telefoneAluno: phone.value,
        emailAluno: email.value,
        rendaAluno: rent.value,
        nomeGarantidor: lender.value,
        cpfGarantidor: cpfLender.value,
        telefoneGarantidor: phoneLender.value,
        emailGarantidor: emailLender.value,
        rendaGarantidor: rentLender.value,
        instituicao: courses,
        curso: list,
        cep: cep.value,
        rua: street.value,
        numero: numberStreet.value,
        bairro: district,
        cidade: city,
        estado: state,
      }
      const response = await axios.post("https://pravaler-api.herokuapp.com/register", body);
      console.log(response)
    };
    
  return (
    <>
     <header>
        <a href="https://www.pravaler.com.br/" className="brand">
          <img src="pravaler.png" alt="" />
        </a>
        <div className="navigation">
          <button type="button " className="btn-clean" onClick={routerHome}>
            Home
          </button>
          <button type="button " className="btn" onClick={routerSimulador}>
            Simulador
          </button>
        </div>
      </header>
     
      <section className="form" className="about">
      <form onSubmit={handleSubit} >
      <div className="content">
      <div className="column col-rigth">
        <h1>Aluno</h1>
        <Input id="name" label="Nome Completo" required {...name} />
        <Input id="email" label="E-mail" required {...email}/>
        <Input id="emailConfirm" label="Confirmação de E-mail" required {...emailConfirm}/>
        <Input placeholder="000.000.000-00" mask="999.999.999-99" id="cpf" label="CPF" {...cpf} required/>
        <Input placeholder="(00) 00000-0000" mask="(99)99999-9999" id="phone" label="Celular" required {...phone}/>
        <InputCurrecy id="rent"  label="Renda" config={currencyConfig} {...rent}/>

        <label> Faculdade <Select required 
        className="input"
        options={school}
        value={courses}
        setValue={setCourses}
        onClick={() => {getCourses(); caseSelect()}}
        
        /></label>

        {courses.length != 0 && <>  
        <label> Curso <Select required  
        className="input"
        options={option}
        value={list}
        setValue={setList}
        /></label> </>}

  

        <label><b>Adicionar Garantidor : </b> <input type="checkbox" value="ledercheck" checked={checkbox} onClick={({target}) => {(setCheckbox(target.checked)); } } /> </label>
        { checkbox === true && <>
          <p>{textLender}</p>
        <h1>Garantidor</h1>
        <Input id="lender" label="Nome Completo"  {...lender} />
        <Input id="emailLender" label="E-mail" setValue={saveCep && saveCep.street} {...emailLender} />
        <Input id="emailConfirmLender" label="Confirmação de E-mail" {...emailConfirmLender} />
        <Input placeholder="000.000.000-00" mask="999.999.999-99" id="cpfLender" label="CPF" {...cpfLender} />
        <Input placeholder="(00) 00000-0000" mask="(99)99999-9999" id="phoneLender" label="Celular" {...phoneLender} />
        <InputCurrecy  id="rentLender" label="Renda" config={currencyConfig} {...rentLender} /></>}
        </div>

        <div className="column col-left">
      
        <Input placeholder="Ex.: 00000-000"  mask="99999-999" id="cep" label="CEP" {...cep} required/>
        <label><button className="btn" onClick={(e)=> {getCep(e)}}>Pesquisar cep</button></label>
        { !saveCep && <>
        <Input id="state" label="Estado" {...state} required/>
        <Input id="city" label="Cidade" {...city} required/>
        <Input id="district" label="Bairro"  {...district} required/>
        <Input id="street" label="Rua"  {...street}  required/>
        <Input id="numberStreet" label="Número "  {...numberStreet} require/>
        <Input id="complement" label="Complemento"  {...complement}/>
        </>  }
        {saveCep && <>
        <div className="cep">
        <p>{saveCep.city}, {saveCep.state} </p>
        <p>{saveCep.neighborhood}</p>
        <p>{saveCep.street}</p>
        </div>
        <Input id="numberStreet" label="Número"  {...numberStreet}/>
        <Input id="complement" label="Complemento"  {...complement}/>
        </>}
        </div>
        <p>{fields}</p>
      </div>
      <label><button className="btn">Enviar</button></label>       
      </form>
      </section>
      <Footer />
    </>
  );
}

export default App;
