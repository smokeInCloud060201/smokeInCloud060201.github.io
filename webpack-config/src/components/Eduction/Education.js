import React from "react";
import Card from "../commons/card/Card";
const Education = () => {

    const EducationContent = () => {

        return (
            <div>
                This is education
            </div>
        )
    }

    return (
        <div>
            <Card sectionName='Education' title='Education' description={''}>
                <EducationContent />
            </Card>
        </div>
    )
}

export default Education;

