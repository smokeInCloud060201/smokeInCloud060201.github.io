import React, {useEffect, useRef} from "react";
import Card from "../commons/card/Card";


const AboutMe = ({onScroll, ...rest}) => {

    const ref = useRef();

    const AboutMeContent = () => {

        return (
            <div>
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tristique ligula, vel volutpat justo. Aliquam erat volutpat. Nullam vel enim ac urna fermentum consectetur. Donec vel justo vel sem condimentum ultricies. Integer non mauris et metus lobortis convallis.
                </p>
            </div>
        )
    }

    useEffect(() => {
        onScroll(ref)
    }, [onScroll]);

    return (
        <div {...rest} id={'about'} ref={ref}>
            <Card sectionName='About Me' title='WHO AM I?' description={''}>
                <AboutMeContent />
            </Card>
        </div>
    )
}

export default AboutMe;