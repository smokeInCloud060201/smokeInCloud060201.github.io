import React from "react";
import Card from "../commons/card/Card";


const Experience = () => {

    const ExperienceContent = () => {

        return (
            <div>This is experience section</div>
        )
    }


    return (
        <div>
            <Card sectionName='Experience' title='Work Experience' description={''}>
                <ExperienceContent/>
            </Card>
        </div>
    )
}

export default Experience;

