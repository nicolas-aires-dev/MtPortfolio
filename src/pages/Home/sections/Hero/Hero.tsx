import { styled, Grid, Container, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.png"
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import "../../../../components/AnimatedBackground/animated-background.css";
import CV from "../../../../assets/pdfs/Nicolas_Aires_Tech_Process_20-10-2026.pdf"


const HeroSection = () => {
    
    const StyledImg = styled("img")(({theme})=> ({
        width: "80%",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "50%",
        position: "relative"
    }))

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        isolation: "isolate",
        width: "100%",
        boxSizing: "border-box",

        [theme.breakpoints.down("md")]: {
            display: "block",
            padding: "100px 20px 40px",
            height: "auto",
            minHeight: "100vh",
        },

        [theme.breakpoints.up("md")]: {
            display: "flex",
            alignItems: "center",
            height: "100vh",
        },
    }));

const handleDownload = () => {
    console.log("download")
    // Create a link element
    const link = document.createElement('a');
    link.href = CV
    link.download = "Nicolas_Aires_Tech_Process_20-10-2026.pdf";
    // Append the link to the body.
    document.body.appendChild(link);
    // Trigger the click event.
    link.click();
    // Remove the link from the body.
    document.body.removeChild(link);
};

const handledEmail = () => {
    const emailAddress = "ni_colasaires@hotmail.com";
    const subject = "Contato via portfólio";
    const body = "Olá! Vi seu portfólio e...";

    const outlookUrl =
        `https://outlook.live.com/mail/0/deeplink/compose` +
        `?to=${encodeURIComponent(emailAddress)}` +
        `&subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.open(outlookUrl, "_blank", "noopener,noreferrer");
};

  return (
    <>
        <StyledHero className="animated-background">
            <Container maxWidth="lg">
                <div className="bg" />
                <Grid container spacing={2}>
                    <Grid size={{ xs:12, md: 5 }} sx={{display:"flex", justifyContent: "center", alignContent: "center"}}>

                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} >
                        <Typography variant="h1" sx={{ textAlign: "center", color:"white", pb:2}}>Nícolas Aires</Typography>
                        <Typography variant="h4" sx={{ textAlign: "center", color:"white" }}>"Solução de problemas, com tecnologia."</Typography>
                        <Grid container sx={{ display: "flex", justifyContent: "center", pt:5 }} spacing={3}>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <StyledButton onClick={() => handleDownload()}>
                                    <DownloadRoundedIcon/>
                                        <Typography>
                                            Baixar CV
                                        </Typography>
                                </StyledButton >
                            </Grid>
                            <Grid size={{ xs: 12, md:4 }} sx={{ display: "flex", justifyContent: "center" }}>
                                <StyledButton onClick={() => handledEmail()}>
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

export default HeroSection
