import React, {useEffect, useState} from "react";
import metam from "assets/images/metamask.svg";
import moral from "assets/images/moralis-circle.svg";

import { FaSignOutAlt } from "react-icons/fa";
import { Row, Col } from "reusecore/Layout";
import LoginWrap from "./login.style";
import {useMoralis} from 'react-moralis';
import Modal, {closeStyle} from 'simple-react-modal'
 

const LoginBtn = () => {
  const {isAuthenticated, authenticate, Moralis, user, logout} = useMoralis()
  const [profileUrl, setProfileUrl] = useState('https://i.ibb.co/L03wxBz/moralis-tech.png')
  const [modalIsOpen,setIsOpen] = useState(false)
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  

  useEffect(() => {
    if (!isAuthenticated)
      return

    setEmail(user.get('email'))
    setUsername(user.get('username'))
  }, [isAuthenticated, profileUrl])


  useEffect(() => {
    if (!isAuthenticated)
      return

    loadProfilePicture()
  })

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const loadProfilePicture = () => {
    const query = new Moralis.Query('Applications')
    query.equalTo('name', user.id)
    query.descending("createdAt")
    query.limit(1)
    query.find().then(function ([application]) {
      console.log(application)
      if (application) {
        const ipfs = application.get('profileUrl').ipfs()
        setProfileUrl(ipfs)
      }
    })
  }

  const loginBtn = !isAuthenticated && (
      <button className="nav__button" on="true" onClick={authenticate}>
          <Row>
              <Col>
                <img src={metam} height={32} className="icon"/>
              </Col>
              <Col className="lowpad">
                <span className="sign">Sign in</span>
              </Col>
          </Row>
      </button>
  )

  const saveModal = async () => {
    user.setUsername(username)
    user.setEmail(email)
    await user.save()
    closeModal()
  }

  const onModalProfileImageChange = async (evt) =>  {
    const data = evt.target.files[0]
    const file = new Moralis.File(data.name, data)
    console.log(await file.saveIPFS())

    const jobApplication = new Moralis.Object('Applications')
    jobApplication.set('name', user.id)
    jobApplication.set('profileUrl', file)
    jobApplication.set('timestamp', new Date().getTime())
    console.log(await jobApplication.save())
  }

  const onModalEmailChange = (evt) => setEmail(evt.target.value)
  const onModalUsernameChange = (evt) => setUsername(evt.target.value)

  const modal = (
    <Modal
      style={{background: 'rgba(	72, 61, 139, 0.85)'}} //overwrites the default background
      containerClassName="cont"
      closeOnOuterClick={true}
      show={modalIsOpen}
      onClose={closeModal}
      transitionSpeed={5}>
 
        <h2 className="light">Welcome to HyperFabric!</h2>

        <Row>
        
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} placeholder="Your username.." onChange={onModalUsernameChange}/>
        
            <label htmlFor="email">Email address</label>
            <input type="text" id="email" name="email" value={email} placeholder="Your email address.." onChange={onModalEmailChange}/>

        </Row>

        <Row>
          <label htmlFor="avatar">Select your profile picture</label>
          <input type="file"
            className="imager"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg"
            onChange={onModalProfileImageChange}></input>
        </Row>
        <Row className="nopad">
          <button className="button button2" on="true" onClick={closeModal}>
            <Row>
                <Col className="cen">
                  <span className="sign">Cancel</span>
                </Col>
            </Row>
          </button>

          <button className="button button2" on="true" onClick={saveModal}>
            <Row>
                <Col className="cen">
                  <span className="sign">Save</span>
                </Col>
            </Row>
          </button>
      </Row>
      </Modal>
  )

  const profile = isAuthenticated && (
    <Row>
      <Col className="usr">
          <h3 className="nami">Hi, {user.attributes.username}</h3>
          <span>{user.attributes.ethAddress}</span>
      </Col>
      <Col>
          <Row>
            <img src={profileUrl} alt="Avatar" className="avi" onClick={openModal}/>
            <button className="outgo" onClick={logout}><FaSignOutAlt /></button>
          </Row>
          
      </Col>
    </Row>

  )

  return (
    <LoginWrap id="loginWrap">
        {loginBtn}
        {profile}
        {modal}
    </LoginWrap>
  );
};

export default LoginBtn;
