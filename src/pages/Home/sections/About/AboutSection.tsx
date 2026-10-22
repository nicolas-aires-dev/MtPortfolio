import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledAbout = styled("div")(( {theme} ) => ({
        backgroundColor: theme.palette.secondary.main,
        height: "100%",
        marginBottom: "30px"
    }))

    const StyledCard = styled(Card)(({ theme }) => ({
        backgroundColor: "transparent",
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        transition: "all 0.2s ease-in-out",
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText,
            color: theme.palette.secondary.main
        }
    }));

    const skillsSet = [
        "Python", "Typescript", "Django", "FastAPI", "APIs REST", "JWT Auth", "Vite", "React", "Material UI", "MySQL", "PostgreSQL", "Celery", "Redis", "AWS EC2", "Docker", "Pytest", "Git / Github"]

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg">
                    <Box id="about" sx={{pt:5, mb:3}}>
                        <Typography sx={{  variant:"h2", textAlign:"center"}} >Sobre mim</Typography>
                    </Box>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                pb: 3
                            }}
                        >
                            <Grid size={{ xs: 9, md: 3.5 }}>
                                <AnimationComponent moveDirection="right">
                                    <StyledCard variant="outlined">
                                        <WorkspacePremiumIcon />
                                        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                                            Experiência
                                        </Typography>
                                        <Typography sx={{ textAlign: "center" }}>
                                            6+ Anos
                                        </Typography>
                                        <Typography sx={{ textAlign: "center" }}>
                                            Analista da Informação
                                        </Typography>
                                    </StyledCard>
                                </AnimationComponent>
                            </Grid>

                            <Grid size={{ xs: 9, md: 3.5 }}>
                                <AnimationComponent moveDirection="left">
                                    <StyledCard variant="outlined">
                                        <SchoolIcon />
                                        <Typography sx={{ textAlign: "center", fontWeight: 600 }}>
                                            Educação
                                        </Typography>
                                        <Typography sx={{ textAlign: "center" }}>
                                            Tecnologia em
                                        </Typography>
                                        <Typography sx={{ textAlign: "center" }}>
                                            Análise e Desenvolvimento de Sistemas
                                        </Typography>
                                    </StyledCard>
                                </AnimationComponent>
                            </Grid>
                        </Grid>
                    <Box sx={{pb:3, textAlign:"center"}}>
                        <Typography>
                            Sou desenvolvedor com foco em Backend Python, automação e integração de sistemas. Gosto de entender como as coisas funcionam, identificar gargalos e transformar problemas em soluções práticas, buscando sempre equilibrar eficiência, qualidade e facilidade de manutenção. 
                            <br />
                            <br />
                            Tenho experiência com desenvolvimento de APIs, processamento de dados e automação de processos, utilizando tecnologias como Python, Django, FastAPI e bancos de dados relacionais. Também me interesso por melhoria contínua e pelo uso da tecnologia para simplificar tarefas e otimizar fluxos de trabalho.
                            <br />
                            <br />
                            Acredito que boas soluções começam com as perguntas certas. Por isso, busco entender o problema antes de definir a abordagem, mantendo a curiosidade e o aprendizado constante como parte do meu desenvolvimento profissional.
                        </Typography>
                    </Box>
                    <hr />
                    <Box id="skills" sx={{ pt:1, mb:3 }}>
                        <Typography sx={{ variant:"h3", textAlign:"center", fontWeight:300 }}>Skills</Typography>
                    </Box>
                    <Box sx= {{mb:5}}>
                        <Grid container sx={{ spacing:3, justifyContent:"center" }}>
                            {skillsSet.map((skill, index) => (
                                <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                                    <StyledCard variant="outlined">
                                        {skill}
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </StyledAbout>
        </>
    )
}

export default AboutSection