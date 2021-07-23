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
                        <li><a href="#a">Overview</a></li>
                        <li><a href="#a">Pricing</a></li>
                        <li><a href="#a">Marketplace</a></li>
                        <li><a href="#a">Features</a></li>
                        <li><a href="#a">Integrations</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#a">About</a></li>
                        <li><a href="#a">Team</a></li>
                        <li><a href="#a">Blog</a></li>
                        <li><a href="#a">Careers</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#a">Contact</a></li>
                        <li><a href="#a">Newsletter</a></li>
                        <li><a href="#a">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
