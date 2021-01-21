import React from 'react';
import containerStyles from '../styles/components/footer.module.scss';
// import powered_logo from '../images/powered_logo.png'
// import insatgram from '../images/icons/icons8-instagram-100.png'
// import facebook from '../images/icons/icons8-facebook-100.png'
// import youtube from '../images/icons/icons8-play-button-100.png'
// import discord from '../images/icons/icons8-discord-100.png'
import packageJson from '../../package.json';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={containerStyles.footer}>
        <div className={containerStyles.icons}>
          <a
            className={containerStyles.twitter}
            href="https://twitter.com/razorpay"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className={containerStyles.instagram}
            href="https://www.instagram.com/razorpay/"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className={containerStyles.youtube}
            href="https://www.youtube.com/channel/UCddN5MDa_yirLO8fKVMVnhw"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <p>
          Template by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fastfend"
          >
            Piotr Stadnicki
          </a>{' '}
          | Source code on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/divyanshu013/statuspage-razorpay-hackathon"
          >
            GitHub
          </a>
        </p>
        <p>
          Icons by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            Icons8
          </a>
        </p>
        <p>Made for Razorpay hackathon by <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/divyanshu013"
          >
            divyanshu013
          </a></p>
      </footer>
    );
  }
}
