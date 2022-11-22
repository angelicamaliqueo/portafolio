import Navbarcomponente from '../componente/Navbar';
import ComponenteFooter from '../componente/ComponenteFooter';
    
function Curriculum() {
    return(
        <div style={{backgroundImage:"linear-gradient(#c7f7f7, #cfcecf)" }}>
            <Navbarcomponente/>
            <img src='https://scontent.fscl24-1.fna.fbcdn.net/v/t39.30808-6/315558385_5884052598300919_6611377724038147080_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=4vCAY4U0GKIAX-mMlmU&tn=tfViV23kuJqeftIq&_nc_ht=scontent.fscl24-1.fna&oh=00_AfC8CtjLyClYMaNVKPhSKYjNxUzn3k1NgduV3HMcxhllZw&oe=6375ADCC'/>
<ComponenteFooter/>
        </div>
    )
}
export default Curriculum;