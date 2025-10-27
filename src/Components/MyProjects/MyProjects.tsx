import './myProjects.css'
import theme_pattern from '../../assets/nav_underline.png'

import project_1 from '../../assets/project_1.jpg'
import project_2 from '../../assets/project_2.svg'
import project_3 from '../../assets/project_3.svg'
import project_4 from '../../assets/project_4.svg'
import project_5 from '../../assets/project_5.svg'
import project_6 from '../../assets/project_6.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProjects = () => {
    const myProjectsData = [
        {
            p_no: '01',
            p_name: 'Project - 01',
            p_img: project_1
        },
        {
            p_no: '02',
            p_name: 'Project - 02',
            p_img: project_2
        },
        {
            p_no: '03',
            p_name: 'Project - 03',
            p_img: project_3
        },
        {
            p_no: '04',
            p_name: 'Project - 04',
            p_img: project_4
        },
        {
            p_no: '05',
            p_name: 'Project - 05',
            p_img: project_5
        },
        {
            p_no: '06',
            p_name: 'Project - 06',
            p_img: project_6
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