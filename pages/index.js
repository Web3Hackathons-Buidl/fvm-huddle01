/* eslint-disable react/no-children-prop */
import dynamic from 'next/dynamic';
import Link from 'next/dist/client/link';
import Layout from '../components/Layout';
import Logo from '../components/basic/Logo';
import Button from '../components/basic/button/Button';
import Foot from '../components/sections/foot/Foot';
import styles from '../styles/Home.module.css';
import '../styles/Home.module.css';
import fonts from '../styles/Fonts.module.css';
import { useState } from 'react';

// import userflow from 'userflow.js'
// import { Waitlist } from 'waitlistapi'
// import { useEffect } from 'react';

const ThemeButton = dynamic(() => import('../components/basic/ThemeButton'), {
  ssr: false,
});

// useEffect(() => {
//   fetch('https://app.huddle01.com/qrh-jwfa-wov', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'

//     }
//   })
//     .then(res => res.json())
//     .then(data => setEntry(data));

// }, [])

// const [openModal, setOpenModal] = React.useState(false);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Layout backgroundImage="home">
        <nav className={styles.navbar}>
          <div className={styles.containerFluid}>
          <div className={styles.flexed}>
              <Logo />
              <div className={styles.buttons}>
              
                <ThemeButton />
                <span className="margin-right-wide"></span>
                <Button
                  className="openModalBtn"
                  onClick={handleModal}
                  bg="dark"
                  text="Join Lobby"
                />

                <div className={styles.modalContainer}>
                {showModal && (
                  <div className={`${styles.modal}`} >
                    <div className={styles.modalContent} style={{ width: '90%' }}>
                      <iframe class="rounded-3"
                        id="huddle01-iframe"
                        src="https://app.huddle01.com/0x81D9F3E009"
                        name="myiFrame"
                        scrolling="yes"
                        allowFullScreen
                        allow="camera; microphone; clipboard-read; clipboard-write; display-capture"
                      ></iframe>

                      <button onClick={handleModal}>X</button>
                    </div>
                  </div>                
                  )}
                </div>
                <span className="margin-right-wide"></span>
                <Button
                  className="openModalBtn"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  bg="greenToPurple"
                  spread="gradient"
                  text="Login"
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="index-container">
          <div className="row">
            <div className="col-md-5 p-3">
              <span
                className={`color-subtitle ${fonts.mont}`}
                style={{ fontWeight: 300 }}
              >
                360NFT is currently invite-only
                <br />
                <span>
                  Here&apos;s how to{' '}
                  <Link href="/" legacyBehavior>
                    <a
                      className="color-alternate"
                      style={{ textDecoration: 'none' }}
                    >
                      {' '}
                      skip the waitlist now
                    </a>
                  </Link>
                </span>
              </span>
              <br />
              <br />
              <span
                className={`color-primary ${fonts.druk}`}
                style={{ fontSize: '45px' }}
              >
                GET ON
                <br />
                THE <span className="color-alternate"> LIST</span>
              </span>
              <br />
              <br />
              <h1
                className={`color-primary ${fonts.mont}`}
                style={{ fontWeight: 300 }}
              >
                Welcome Friend,
                <br />
                please log in
              </h1>
            </div>
          </div>

          {/* Show Waitlist if ! authenticated */}
          {/* <div style={{paddingBottom: '50px'}}>
                    {typeof window !== 'undefined' && <Waitlist className='container--waitlistapi' api_key='E7YQLY' waitlist_link='https://trapchain.herokuapp.com/' />}
                  </div> */}
        </div>
        <Foot position="static" />
      </Layout>
    </div>
  );
}
