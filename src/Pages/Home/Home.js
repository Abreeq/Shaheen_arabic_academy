import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import molvi from '../../assets/images/molvi.png'
import { AlAqsaMosqueIcon, PrayerRug01Icon, MuslimIcon, SujoodIcon ,Quran01Icon} from 'hugeicons-react';
import Cards from '../../Components/Cards/Cards';
const Home = () => {
  return (
    <>
    <div className='home-container'>
    <div className='overlay'></div>
    <div className='home-content'>
        <div className='molvi-container'>
            <div className='items'>
            <AlAqsaMosqueIcon color='#ffffff' size={30} className='item mosque'/>
            <PrayerRug01Icon color='#ffffff' size={30} className='item rug'/>
            <MuslimIcon color='#ffffff' size={30} className='item muslim'/>
            <SujoodIcon color='#ffffff' size={30} className='item sujood'/>
            <Quran01Icon color='#ffffff' size={30} className='item quran'/>
            </div>

            <img className='molvi' src={molvi} alt="Moulana Mohammad Shafi" />
            <h1 className='molvi-name'>Moulana Mohammad Shafi</h1>
        </div>
        <h1 className='main-heading'>شاہین عربک اکیڈمی</h1>
        <p className='sub-heading'>Discover the beauty of the Islam through excellence in education</p>
    <Link className='enroll-btn enroll-link' to='/enroll'>Enroll Now</Link>
    
    </div>
    </div>
    <Cards />
    </>
  )
}

export default Home