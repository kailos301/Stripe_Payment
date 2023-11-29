import css from '../styles/Footer.module.css';
import {UilFacebook, UilTwitter, UilGithub} from "@iconscout/react-unicons";
import Image from 'next/image';
import Logo from "../assets/Logo.png";

export default function Footer() {
    return (
        <div className={css.container}>
            <span>All Rights Reserved</span>
            <div className={css.social}>
                <UilFacebook size="40"/>
                <UilTwitter size="40"/>
                <UilGithub size="40"/>
            </div>
        </div>
    );
};


