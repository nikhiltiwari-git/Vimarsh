import './Home.css';
import lottie from 'lottie-web';
import React,{useEffect,useRef} from 'react';

function Home() {

    const container= useRef(null)

    useEffect( ()=>{
        const instance = lottie.loadAnimation({

            container:container.current,
            renderer: 'svg',
            loop :true,
            autoplay: true,
            animationData: require('./logo.json')
            
        });

        return () => instance.destroy();

    },[]);

    return (
        <div className='home-page'>
            <div className='quote'>
            <h1>₿itsignal is an exit.</h1>
            <h2></h2>
            <p>"The Times" 03/Jan/2009 Chancellor on brink of</p>
            <p>a second bailout for banks</p>
            {/* <p>It's gold for nerd's</p> */}
            <span> </span>
            
            </div>
            <div className='slide' style={{width:'70%'}} ref={container}> </div>  
        </div>
    );
}

export default Home;
