const Button = ({name, title}) => {
    return (
        <>
            <a href="#" className={`btn ${name}`}>{title}</a>
        </>
    )
}

export default Button
