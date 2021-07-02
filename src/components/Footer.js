import logo from '../images/logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="col">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
