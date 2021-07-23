const Button = ({name, title}) => {
    return (
        <>
            <a href="#a" className={`btn ${name}`}>{title}</a>
        </>
    )
}

export default Button
