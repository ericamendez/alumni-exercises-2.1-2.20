const Notification = ({ message }) => {
    if(message) {
        return null
    }

    const notificationStyle = {
        color: 'red',
        fonsize: '16'
    }

    return (
        <div className="error" style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification