import MyProjectWidget from '../components/home/Projects'
import MyUtilitiesWidget from '../components/home/Utility'

interface Project {
    title: string,
    downloads: string,
    follows: string,
    description: string,
    id: string,
    link: string,
    upload_date: string
}


function Home() {
    // Get Project Data via MODRINTH API
    const project_slugs = [""]
    let project_list : Project[] = [{id:"", link:"#", upload_date:"2025-01-01", title: "ABC", downloads: "1000", follows: "10", description: "A Project"}, {id:"", link:"#", upload_date:"2025-01-01", title: "DEFG", downloads: "1000", follows: "10", description: "A Project"}]
    /*
    for (const project of project_slugs) {
        // Get Project Data from API
        let projectData: any = fetch(`api.modrinth.com/project/${project}`)
        // Store Project Data in a List of Projects
        project_list.push(projectData)
        // Testing
        console.log(projectData);
    } */

    // Structure the API data to suit the needs of the website's display.
    let rendered_list: any = []
    project_list.forEach((project) => {
        rendered_list.push(
            <MyProjectWidget projectDescription={project.description} projectName={project.title} projectDownloadCount={project.downloads} projectFollowCount={project.follows} projectLink={project.link} projectUploadDate={project.upload_date} />
        )
    });


    // Build the Home Page    
    return(
        <>
            <div>{rendered_list}</div>
            <br />
            <MyUtilitiesWidget utilityName="GUI Maker" utilityIcon="#" utilityDescription="Make GUIs to Import into Game." />
        </>
    )
}

export default Home