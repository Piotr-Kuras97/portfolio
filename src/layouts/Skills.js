import SkillsList from '../components/Skills/SkillsList'

import '../styles/skills.scss'

const Skills = ({reference}) => {
    return (
        <section className="skills" ref={reference}>
            <h2 className='skills__title'>02. skills</h2>
            <h4 className='skills__subtitle'>What I write the app in:</h4>
            <div className="skills__container">
                <SkillsList />
            </div>
        </section>
    )
}

export default Skills