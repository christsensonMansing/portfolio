import '../assets/styles/footer.css'
import github from '../assets/github.svg'
import linkedIn from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import email from '../assets/email.svg'

export default function Footer() {

  return (
    <div className="footer">
      <div className="socials">
        <a href="https://github.com/christsensonMansing" target='_blank'><img src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/christsenson-mansing-1a1674297/" target='_blank'> <img src={linkedIn} alt="" /></a>
        <a href="https://www.instagram.com/christsensonmansing/" target='_blank'>   <img src={instagram} alt="" /></a>
        <a href="mailto:someone@example.commailto: christsenonmansing4133@gmail.com" target='_blank'>   <img src={email} alt="" /></a>
      </div>
      <p>&copy; 2025 Christsenson Mansing</p>
    
    </div>
  )
}
