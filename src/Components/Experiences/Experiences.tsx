import './experiences.css';
import theme_pattern from '../../assets/nav_underline.png';
import arrow_icon from '../../assets/arrow_icon.svg';

const Experiences = () => {
    const expData = [
        {
            e_title: 'Logistics',
            e_desc: 'Modules like Admin, User Management, Purchase, Consmption, Survey...'
        },
        {
            e_title: 'EdTech',
            e_desc: 'Modules like Admin, Lectures, Assignment, Online Test, Attendance...'
        },
        {
            e_title: 'Life Insurance',
            e_desc: 'Modules like OCR Integration (Docs scanning), FC Scrutiny, Training...'
        },
        {
            e_title: 'Community',
            e_desc: 'Modules like Quiz Comptetion - with Video Call, Live Chat...'
        },
        {
            e_title: `Broker's App`,
            e_desc: 'Module like Login (Multiple Ways), Positions, Portfolio, MF - Transactions...,'
        }
    ]
  return (
    <div id='Experience' className='experiences'>
        <div className="experiences-title">
            <h1>My Experiences</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experiences-container">
            {expData.map((exp, index) => {
                return <div key={index} className='experience-format'>
                    <h2>{exp.e_title}</h2>
                    <p>{exp.e_desc}</p>
                    <div className="experience-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt=''/>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Experiences