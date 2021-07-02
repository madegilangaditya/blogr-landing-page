import Button from './Button'

const Banner = () => {
    return (
        <div className="banner row">
            <div className="text-content">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
            </div>
            <div className="button-content">
                <Button name='btn-light' title='Start For Free'/>
                <Button name='btn-transparent' title='Learn More'/>
            </div>
        </div>
    )
}

export default Banner
