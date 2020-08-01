/**
 * @license
 * Copyright &copy 2020 Labalytics
 *
 * @author Sai Kalyan Moguloju
 */

import React, {useState} from 'react';
import Divider from 'terra-divider';
import Navbar from './Navbar';
import Grid from 'terra-grid';
import ContentContainer from 'terra-content-container';
import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';
import ReactSignupLoginComponent from 'react-signup-login-component';
import SlidePanel from 'terra-slide-panel';
import Item from './Item'
import Placeholder from 'terra-doc-template/lib/Placeholder';
import Text from 'terra-text';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return(
    <div>
      <SlidePanel
        mainContent={
          <div>
            <ContentContainer header={<div>
              <Navbar onLogin={()=>setIsOpen(true)} onSignup={()=>setIsOpen(true)}/>
            <Spacer marginTop="large+3">
            <Grid>
              <Grid.Row>
                <Grid.Column medium={2} style={{background: '#f8f9fa'}}>
                  <Spacer paddingTop="large+2" paddingBottom="large+2" style={{height: '99%'}} >
                    <Spacer paddingLeft="large" >
                      <Text weight="700" fontSize={12}>Section for Search Filter</Text>
                    </Spacer>
                    <Placeholder style={{hight: '100%'}} />
                  </Spacer>
                </Grid.Column>
                <Grid.Column medium={8}>
                  <div>
                    <Spacer marginTop="large+3" marginBottom="medium">
                      <Text weight="700" fontSize={18}>Search Results</Text>
                    </Spacer>
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                    <Divider />
                    <Item />
                </div>
                </Grid.Column>
                <Grid.Column medium={2} style={{background: '#f8f9fa'}}>
                  <Spacer paddingTop="large+2" paddingBottom="large+2" style={{height: '99%'}} >
                    <Spacer paddingLeft="large" >
                      <Text weight="700" fontSize={12}>Section for Cart</Text>
                    </Spacer>
                    <Placeholder style={{hight: '100%'}} />
                  </Spacer>
                </Grid.Column>
              </Grid.Row>
            </Grid> 
          </Spacer></div>}
          >
            
            </ContentContainer>
          </div>
        }
        panelContent={
          <div style={{height: '100%'}}>
            <Arrange fill={<div/>} fitEnd={<button onClick={() => setIsOpen(false)}>X</button>}/>
            <ReactSignupLoginComponent
              styles={{
                mainWrapper: { width: '94%', border: '0px', backgroundColor: 'none'},
                signup: {
                  recoverPassword: {},
                  button: { backgroundColor: '#efecec', height:'30px', borderRadius: '5px', lineHeight:'0px', borderColor:'white' },
                },
                login: {
                  recoverPasswordButton: { backgroundColor: '#efecec', height:'30px', borderRadius: '5px', lineHeight:'0px', borderColor:'white' },
                  button: { backgroundColor: '#efecec', height:'30px', borderRadius: '5px', lineHeight:'0px', borderColor:'white' },
                },
                recoverPassword: {
                  button: { backgroundColor: '#efecec', height:'30px', borderRadius: '5px', lineHeight:'0px', borderColor:'white' },
                }
              }}
              title="Login/Signup"
              handleSignup={() => {}}
              handleLogin={() => {}}
              handleRecoverPassword={() => {}}
              submitLoginCustomLabel="Login"
            />    
          </div>
        }
        panelBehavior="overlay"
        panelPosition="end"
        isOpen={isOpen}
        fill
      />
    </div>
  )
}

export default Home;
