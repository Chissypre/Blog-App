import './Footer.styles.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright {today.getFullYear()} Chizaram Precious</p>
        </footer>
    )
}

export default Footer