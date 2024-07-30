import React, {useCallback, useRef} from "react";
import AboutSection from "./components/AboutMe";
import Skills from "./components/Skill/Skills";
import Education from "./components/Eduction/Education";
import Experience from "./components/Experience/Experience";

const App = () => {

    const navigationTabs = [
        {name: 'About', link: '#about'},
        {name: 'Skills', link: '#skills'},
        {name: 'Education', link: '#education'},
        {name: 'Experience', link: '#experience'},
    ]

    const Navigation = () => {
        return (
            <ul>
                {
                    navigationTabs.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    const scroll = (ref) => {
        console.log(ref);
        if (ref) {
            ref?.current?.scrollIntoView();
        }
    }

    return (
        <div className='app relative'>
            <div className='app-content flex flex-row fixed py-[46px]'>
                <nav className='app-content__nav flex'>
                    <Navigation />
                </nav>
                <div className={'h-fit'}>
                    <AboutSection onScroll={scroll}/>
                    <Skills/>
                    <Education/>
                    <Experience/>
                </div>
            </div>
        </div>
    )
}

export default App;