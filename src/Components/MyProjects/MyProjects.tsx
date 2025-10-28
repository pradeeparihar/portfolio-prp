import './myProjects.css'
import theme_pattern from '../../assets/nav_underline.png'

import quiz_project from '../../assets/quiz_project.jpg'
import voice_assistant_project from '../../assets/voice_assistant_project.jpg'
import interactive_session from '../../assets/interactive_session.jpg'
import more_to_come from '../../assets/more_to_come.jpg'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProjects = () => {
    const myProjectsData = [
        {
            p_no: '01',
            p_name: 'Project - 01',
            p_img: quiz_project
        },
        {
            p_no: '02',
            p_name: 'Project - 02',
            p_img: voice_assistant_project
        },
        {
            p_no: '03',
            p_name: 'Project - 03',
            p_img: interactive_session
        },
        {
            p_no: '04',
            p_name: 'Project - 04',
            p_img: more_to_come
        },
        {
            p_no: '05',
            p_name: 'Project - 05',
            p_img: more_to_come
        },
        {
            p_no: '06',
            p_name: 'Project - 06',
            p_img: more_to_come
        }
    ]
  return (
    <div id='Project' className='myprojects'>
        <div className="myprojects-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="myprojects-container">
            {myProjectsData.map((proj, index) => {
                return <img key={index} src={proj.p_img} alt="" />
            })}
        </div>
        <div className="myprojects-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyProjects