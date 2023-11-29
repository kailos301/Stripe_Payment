import css from '../styles/Services.module.css'
import Image from 'next/image';
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'


export default function Services(){

    return (
        <>
         <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span>Your Favourite Food</span>
            <span>Delivery Partner</span>
         </div>

         {/* Features */}

         <div className={css.services}>
<div className={css.feature}>
<div className={css.ImageWrapper}>
    <Image src={s1} alt="" objectFit='cover' layout="intrinsic" width={150} height={150}/>
</div>

<spna>Esay to Order</spna>
<spna>You only need a few steps in food ordering</spna>

</div>


<div className={css.feature}>
<div className={css.ImageWrapper}>
    <Image src={s2} alt="" objectFit='cover' layout="intrinsic" width={150} height={150}/>
</div>

<spna>Esay to Order</spna>
<spna>Delivery that is always on time even faster</spna>



</div>
<div className={css.feature}>
<div className={css.ImageWrapper}>
    <Image src={s3} alt="" objectFit='cover' layout="intrinsic" width={150} height={150}/>
</div>

<spna>Esay to Order</spna>
<spna>not only fast for us, quality is also number one</spna>
</div>

         </div>
        </>
    )
}