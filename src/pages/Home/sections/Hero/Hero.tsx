import { styled, Grid, Container, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.png"
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import "../../../../components/AnimatedBackground/animated-background.css";


const Hero = () => {

    const StyledHero = styled("div")(( {theme} )=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        isolation: "isolate",
    }))

    const StyledImg = styled("img")(({theme})=> ({
        width:"80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.secondary.main}`,
    }))

  return (
    <>
        <StyledHero className="animated-background">
            <Container maxWidth="lg">
                <div className="bg" />
                <Grid container spacing={2}>
                    <Grid size={{ xs:12, md: 5 }} sx={{display:"flex", justifyContent: "center", alignContent: "center"}}>

                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography variant="h1" sx={{ textAlign: "center", color:"white" }}>Nícolas Aires</Typography>
                        <Typography variant="h4" sx={{ textAlign: "center", color:"white" }}>Solução de problemas, usando tecnologia.</Typography>
                        <Grid container sx={{ display: "flex", justifyContent: "center", padding:"25px 0px 25px 0px" }} spacing={3}>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <StyledButton>
                                    <DownloadRoundedIcon/>
                                        <Typography>
                                            Baixar CV
                                        </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <StyledButton>
                                    <MailRoundedIcon/>
                                        <Typography>
                                            Contato
                                        </Typography>
                                </StyledButton>
                                </Grid>
                            </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    </>
  )
}

export default Hero
