import React , {useEffect , useState} from 'react'
import {Col , Row , Container} from 'react-bootstrap'
const Banner = () => {
    const [loopNum , setLoopNum] = useState(0) ; 
    const [isDeleting ,setIsDeleting] = useState(false) ;  
    const [text ,setText] = useState('') ;  
    const [delta , setDelta] = useState(300 - Math.random() * 100)
    const period = 2000 ;
    const toRolate = ["web Developer" , "Web Designer" , "UI/UX Designer"] ; 
    // Tick function 
    const tick  = () => {
        let i = loopNum % toRolate.length ; 
        let fullText = toRolate[i] ; 
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1 ) :
        fullText.substring(0 , text.length + 1 )
        setText(updatedText) ; 
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2 ) ; 
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true) ; 
            setDelta(period) ; 
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false) ; 
            setLoopNum(loopNum + 1) ; 
            setDelta(500) ; 
        }
    }
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick() ; 
        }, delta)
    return () =>{clearInterval(ticker)}
    }
    ,[text])
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col>
                <span className='tagline'>welcom to my Profolio</span>
                <h1>{"Hi I'm webdecoded"}<span className='wrap'>{text}</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, fuga.</p>
                <button onClick={()=>console.log('conntect')}>
                    let's connect 
                </button>
                </Col> 
                <Col xs={12} md={6} xl={5}>
                    <img src={'headerImg'} alt="Headder Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner