import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({theme}) => ({
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,

    }));

    const projects = [
        {
            title: "Project Example",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur",
            technologies: "Javascript, Html, Css, Canvas Graphics",
            websiteURL: "https://trello.com",
            codeURL: "https://github.com"
        },
        {
            title: "Project Example2",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur",
            technologies: "Javascript, Html, Css, Canvas Graphics",
            websiteURL: "https://trello.com",
            codeURL: "https://github.com"
        },
        {
            title: "Project Example3",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur",
            technologies: "Javascript, Html, Css, Canvas Graphics",
            websiteURL: "https://trello.com",
            codeURL: "https://github.com"
        },
        {
            title: "Project Example4",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur",
            technologies: "Javascript, Html, Css, Canvas Graphics",
            websiteURL: "https://trello.com",
            codeURL: "https://github.com"
        }

    ]

    return (
        <StyledExperience>
            <Container sx={{ maxWidth:"lg" }}>
                <Box id="projects" sx={{ pt:"5", pb:"3" }}>
                    <Typography variant="h2" sx={{ textAlign:"center", color:"primary.contrastText" }} >Projects</Typography>
                </Box>
                <Grid container sx={{ spacing:"5", pb:"3" }}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md:6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection