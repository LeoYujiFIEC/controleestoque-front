import stockImage from '../../assets/universo.jpg'
import LoginFormComponents from './components/LoginFormComponents'

const SplashScreen = () => {

  return (
      <div className="relative h-screen w-screen bg-black bg-opacity-10 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
             style={{ backgroundImage: `url(${stockImage})`, backgroundSize: 'cover' }}></div>
  <div className="relative z-10 text-center">
  <LoginFormComponents/></div>
  </div>
  )
  }
  
  export default SplashScreen;
  