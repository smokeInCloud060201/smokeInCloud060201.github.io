import React from "react";

const Card = ({sectionName = '', title = '', description = '', children}) => {

    return (
        <div className={'card pt-[60px] pb-[135px] flex flex-col items-start justify-center px-10'}>
            <div className={'card-header tracking-[5px] w-full'}>
                <div className='mb-4'>
                    {sectionName}
                </div>
                <h2>
                    {title}
                </h2>
                <div>
                    {description}
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}


export default Card;