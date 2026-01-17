interface Project {
    projectName: string,
    projectDescription: string,
    projectLink: string,
    projectUploadDate: string,
    projectDownloadCount: string,
    projectFollowCount: string
}

function MyProjectWidget({ projectDescription, projectName, projectLink, projectUploadDate, projectDownloadCount, projectFollowCount }: Project) {
    function handleClick() {
        window.location.replace(`${projectLink}`)
    }

    return(
        <>
            <button className="MyProjectWidget" onClick={handleClick}>
                <div>
                    <h1 className="MyProjectWidget_Title">{projectName}</h1>
                    <p>{projectDescription}</p>
                    <div className="container">
                        <p className="MyProjectWidget_Downloads">{projectDownloadCount}</p>
                        <p className="MyProjectWidget_Follows">{projectFollowCount}</p>
                        <p className="MyProjectWidget_UploadDate">{projectUploadDate}</p>
                    </div>
                </div>
            </button>
        </>
    )    
}

export default MyProjectWidget