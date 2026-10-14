import { styled, Grid, Container, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.png"
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"

    }))

    const StyledImg = styled("img")(()=> ({
        width:"100%",
        borderRadius: "50%"
    }))

  return (
    <>
        <StyledHero>
            <Container>

                <Grid container spacing={2}>

                    <Grid size={{ xs:12, md: 4 }}>
                        <StyledImg src={Avatar} />
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" sx={{ textAlign: "center" }}>Nícolas Aires</Typography>
                        <Typography color="primary" variant="h3" sx={{ textAlign: "center" }}>Solução de problemas, usando tecnologia.</Typography>
                        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <button>
                                    <DownloadRoundedIcon/>
                                    Baixar Curriculo</button>
                            </Grid>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <button>
                                    <MailRoundedIcon/>
                                    Contato</button>
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
