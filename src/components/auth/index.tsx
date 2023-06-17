import React, {useState} from 'react';
import Image from "next/image";
import profileLight from "@/assets/icons/profile-light.svg";
import profileDark from "@/assets/icons/profile-dark.svg";
import {Divider, Modal} from "@mantine/core";
import styles from './Auth.module.scss'
const Index = () => {
    const [open , setOpen] = useState<boolean>(false)

    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
            <button className={"account-navigation__register-button"}>
                <Image
                    src={profileDark}
                    width={17}
                    height={17}
                    alt={'Register icon'}
                />Qeydiyyat
            </button>
            <button onClick={openModal} className={"account-navigation__login-button"}>
                <Image
                    src={profileLight}
                    width={17}
                    height={17}
                    alt={'Login icon'}
                /><span className={"break-keep"}>Daxil ol</span>
            </button>

            <Modal.Root
                opened={open}
                onClose={closeModal}
                centered>
                {/* Modal content */}
                <Modal.Overlay opacity={0.5} blur={3}/>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title><h3 className={styles.auth__modalTitle}>Giriş et</h3></Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Divider className={'my-3'}/>
                </Modal.Content>
            </Modal.Root>
        </>
    );
};

export default Index;