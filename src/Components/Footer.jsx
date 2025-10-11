function Footer(){

    const year = new Date().getFullYear();

    return (
        <div className="Footer" id="contact">
            <p className="title">Keerthana Ravikumar</p>
            <p className="details">+1 602 690 5395 | keerr.ravikumar@gmail.com </p>
            <div className="icon-group">
                <a href="https://wa.me/+16026905395" target="_blank" rel="noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:keerr.ravikumar@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/keer-ravikumar" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Keer-Ravikumar" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> 
                </a>
        </div>
        <div className="line"></div>
        <p className="lastline">&copy; {year} | Developed by <strong>Keerthana Ravikumar</strong></p>

        </div>
    )
}

export default Footer;