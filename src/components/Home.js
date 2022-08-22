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
            <h2>Get your freedom From <br/> Your sofa.</h2>
            <p>It's gold for nerd's</p>
            </div>
            <div className='slide' style={{width:'70%'}} ref={container}> </div>  
        </div>
    );
}

export default Home;
