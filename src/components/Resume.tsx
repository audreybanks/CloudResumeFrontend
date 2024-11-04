import React from "react";

export interface ResumeSectionProps {
    title: string,
    company: string,
    date: string,
    position: string,
    location: string,
    children: React.ReactNode,
}

const ResumeLinks = ({children}:{children: React.ReactNode}): React.ReactElement => {

    return (
        <p className="flex flex-row justify-center gap-2 text-center mx-auto text-blue-500 underline decoration-blue-500">
            {children}
        </p>
    )
}

const ResumeName = ({children}:{children: React.ReactNode}): React.ReactElement => {
    return (
        <div className="text-2xl text-center mt-8">{children}</div>
    )
}

const ResumePoints = ({children}:{children: React.ReactNode}): React.ReactElement => {
    return (
        <div className="mx-24 flex flex-col">
            <ul className="list-disc">
                {children}
            </ul>
        </div>
    )
}

const ResumeSection = (props: ResumeSectionProps): React.ReactElement => {

    const {
        title,
        company,
        date,
        position,
        location,
        children
    } = props;

    return (
        <div>
            <div className="mt-3 ml-12 text-xl">{title}</div>
            <div className="divider mx-12"></div>
            <div className="mx-12 flex justify-between font-bold">
                <div>{company}</div>
                <div>{date}</div>
            </div>
            <div className="mx-12 flex justify-between">
                <div>{position}</div>
                <div>{location}</div>
            </div>
            {children}
        </div>
    )
}

export {
    ResumeSection,
    ResumeName,
    ResumeLinks,
    ResumePoints,
};