import React , {useState , useEffect}  from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ContactForm = () => {
    const formInitialDetails = {
        firstName:'' , 
        lastName : '' , 
        email : '' , 
        phone : '' , 
        message : '' ,  
    }
    const [formDetails , setForm] = useState(formInitialDetails) ; 
    const [buttonText , setButtonText ] = useState('send') ; 
    const [status , setStatus] = useState({}) ; 
    const onFormUpdate = (e , value) =>{
        setForm({...formDetails , [value]:e })
    }
    const handleSubmit =async (e) => {
        e.preventDefault() ; 
        setButton('Sending...') ; 
        let response = await fetch("http://localhost:5000/contact" , {
            method : "POST" , 
            headers : { 
                "content-Type" : "Application/json;charset=utf-8" 
            } , 
            body: JSON.stringify(formDetails) ,}) ;
        } ; 
        setButtonText("Send") ; 
        let result = response.json() ; 
        setFormDetails(formInitialDetails) ; 
        if(result.code === 200){
            if(result.code === 200) {
                setStatus({success:true , message: 'Message sent successfully '})
            }else {
                setStatus({succes: false , message: 'Something went wrong , please try again later'})
            }
        }

    }
  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
            <Col md={6}>
                <h2>Get in Touch</h2>
                <form action={handleSubmit}>
                    <Row>
                        <Col sm={6} className="px-1">
                            <input value={formDetails.firstName} onChange={e =>onFormUpdate(e.target.value ,"firstName" )}/>
                            <input value={formDetails.lastName} onChange={e =>onFormUpdate(e.target.value ,"lastName" )}/>
                            <input value={formDetails.email} onChange={e =>onFormUpdate(e.target.value ,"email" )}/>
                            <input value={formDetails.phone} onChange={e =>onFormUpdate(e.target.value ,"phone" )}/>
                        </Col>
                        <Col>
                        <textarea value={formDetails.message} onChange={e =>onFormUpdate(e.target.value ,"message" )}  row="10"></textarea>
                        <button type='submit'><span>{buttonText}</span></button>
                        </Col>
                        {
                            status.message && 
                            <col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </col>
                        }
                    </Row>
                </form>
            </Col>
            </Row>
        </Container>
    </section>
  )
}
export default ContactForm
