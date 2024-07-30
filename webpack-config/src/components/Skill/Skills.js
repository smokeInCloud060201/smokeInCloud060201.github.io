import React from "react";
import Card from "../commons/card/Card";


const Skills = () => {

    const SkillContent = () => {

        return (
            <div>SKill content</div>
        )
    }

    return (
        <div id='skills'>
            <Card sectionName='My Specialty' title='My Skills' description={''}>
                <SkillContent />
            </Card>
        </div>
    )
}

export default Skills;

