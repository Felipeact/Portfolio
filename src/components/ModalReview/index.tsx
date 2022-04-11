import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from 'react-modal';


import { ref, set } from 'firebase/database'
import { database } from '../../services/firebase';

import CloseModal from '../../assets/Fechar.svg'

import './styles.scss'
import { getAuth, signOut } from 'firebase/auth';


interface NewServiceModalProps {
  dataUser: {
    uid: string
    displayName: string
    email: string
    photoURL: string
  };
}

interface MessageData {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  reviewMessage: string;
  
}


Modal.setAppElement('body')

export function ModalReview( {dataUser} : NewServiceModalProps) {
  const [ modalIsOpen, setModalIsOpen ] = useState(Boolean)

  function handleCloseNewServiceModal(){
    setModalIsOpen(false)
  }

  const { register, handleSubmit, 
    formState: { errors }, reset, setValue } = useForm<MessageData>()

  const form = useRef<HTMLFormElement | any>();

  function CreateMessage( data: MessageData) {
   
    const db = database

    set(ref(db, 'reviews/' + dataUser?.uid), data)
    .then(() => {
      reset()
      setModalIsOpen(false)
    })
  }


  useEffect(() => {
    if( dataUser) {
      setModalIsOpen(true)
    }
  }, [dataUser])

  function signOutGoogle() {
    const auth = getAuth();
  signOut(auth)
  }
  
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseNewServiceModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      
      <button type="button"  onClick={handleCloseNewServiceModal} className="react-modal-close">
        <img src={CloseModal} alt="close modal" />
      </button>

      <div className="container container__review">
        <h2>Review</h2>
        
        <form onSubmit={handleSubmit(CreateMessage)} ref={form} style={{ display: 'block'}}>
          <input type='hidden' {...register('uid')} value={dataUser?.uid}/>
          <input {...register('displayName')} value={dataUser?.displayName}/>
          <input {...register('email')} value={dataUser?.email}/>
          <input type='hidden'{...register('photoURL')} value={dataUser?.photoURL}/>
          <textarea rows={7} placeholder="Your review" required {...register('reviewMessage')} />
          <button type='submit' className="btn btn-primary" onClick={signOutGoogle}>
            Send Review
          </button>
        </form>
        

      </div>


        

    </Modal>
  )
}
