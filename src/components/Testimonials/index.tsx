import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// import Swiper core and required modules
import { Pagination } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



import './styles.scss'
import { ModalReview } from "../ModalReview";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";


interface MessageData {
uid: string,
displayName: string,
email: string,
photoURL: string,
reviewMessage: string,

}

export function Testimonials() {
  const [ userReview, setUserReview ] = useState<any>()
  const [ reviewsData, setReviwesDta ] = useState<MessageData[]>([])

  
  
  async function sigInWithGoogle(){
    
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    setUserReview(user)
   
  }).catch((error) => {

    
  });

  }

  useEffect( () => {
    const db = getDatabase();
    const dbRef = ref(db, 'reviews/');
    onValue(dbRef, ( reviewMessage ) => {
      const data = reviewMessage.val();
      const dataValues : MessageData = data ?? {}
      console.log(dataValues)
      
      const parsedQuestions: any = Object.entries(dataValues).map( ([key, value]) => {
        return {
          uid: key,
          name: value.name,
          email: value.email,
          photoURL: value.photoURL,
          reviewMessage: value.reviewMessage
        
          
        }
      })
      setReviwesDta(parsedQuestions)
    })
  },[])


  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <h5 className='reviews'>Give me reviews <a onClick={sigInWithGoogle}>Here</a></h5>

      <Swiper className="container testimonials__container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        
        {reviewsData.map( review => (
          <SwiperSlide className='testimonial' key={review.uid}>
          <div className="client__avatar" >
            <img src={review.photoURL} alt={review.displayName} />
          </div>
          <h5>{review.email}</h5>
            <small className='client__review'>
              {review.reviewMessage}
            </small>
        </SwiperSlide>
        ))}
        

        
      </Swiper>

      <ModalReview  dataUser={userReview} /> 
    </section>
  )
}

