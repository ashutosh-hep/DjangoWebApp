import React from 'react';
import styled from 'styled-components';


const Lay = styled.div`
height: 180px;
width: 540px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: orange;
border-radius: 20px;
padding-left: 20px;
`

const Main = styled.div`
height: 180px;
width: 540px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: white;
box-shadow: 0 0 10px rgb(21 87 153 / 8%);

`

const First = styled.div`
display:flex;
align-items:center;
justify-content: center;
padding-top:20px;
height: 50px;
width: 500px;
`

const Second = styled.div`
  color: black;
  font-size: 1.4em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  height: 50px;
  width: 500px;
  margin-left: 26px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`



const Third = styled.div`
display: flex;
justify-content: left;
align-items: center;
padding-bottom: 20px;
height: 50px;
width: 500px;
margin-left: -20px;
`

const First1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;

`

const First2 = styled.div`
padding-left: 170px;
color:#155799;
font-size: 1.3em;
margin-right: 30px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bold;
`

const T1 = styled.div`
  color: black;
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-left: -53px;
`

const T2 = styled.div`
display: flex;
align-items: center;
justify-content: center;

`
const P1 = styled.div`
margin-left: 20px;

`
const P2 = styled.div`
margin-left: 7px;

`
const Img = styled.img`
height: 13px;
width: 13px;
`

const Img1 = styled.img`
height: 25px;
width: 25px;
`

const Pic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Img2 = styled.img`
height: 15px;
width: 12px;
`

const Pic2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Nam = styled.div`
padding-left: 10px;
`

const Nam1 = styled.div`
padding-left: 6px;
`



const ECards = () => {
    return(
        <>
        <Lay>

        <Main>
            <First>

                <First1>
                    <Img src="/images/cir4.png"/>   
                    <P2>29/07/2021</P2>
                    <P1>11AM to 15PM</P1>
                </First1>
                    
                <First2>

                    <p>Free</p>

                </First2>

            </First>

            <Second>
                Digital Transformation Conference
            </Second>

            <Third>
                
                <T1>
                    <Pic>
                <Img1 src="/images/circle.png"/>
                </Pic>
                <Nam>
                    Maurya Ashu
                </Nam>
                </T1>
                

                <T2>
                    <Pic2>
                    <Img2 src="/images/loct.png"/>
                    </Pic2>
                    <Nam1>
                    43 castle road 517 district
                    </Nam1>
                </T2>

            </Third>

        </Main>

        </Lay>


        </>
    )
}
export default ECards;