import './experiences.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Experiences = () => {
    const expData = [
        {
            e_no: '01',
            e_title: 'Title - 01',
            e_desc: 'Description - 01'
        },
        {
            e_no: '02',
            e_title: 'Title - 02',
            e_desc: 'Description - 02'
        },
        {
            e_no: '03',
            e_title: 'Title - 03',
            e_desc: 'Description - 03'
        },
        {
            e_no: '04',
            e_title: 'Title - 04',
            e_desc: 'Description - 04'
        }
    ]
  return (
    <div className='experiences'>
        <div className="experiences-title">
            <h1>My Experiences</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experiences-container">
            {expData.map((exp, index) => {
                return <div key={index} className='experience-format'>
                    <h3>{exp.e_no}</h3>
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