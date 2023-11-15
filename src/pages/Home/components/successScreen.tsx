import { Box, Grid, Typography } from "@mui/material";
import SuccessProductAdded from '../../../shared/assets/images/successProductAdded.svg';

const SuccessScreen = () => {
    return (
        <Box sx={modalStyle}>
            <Grid container display='flex' justifyContent='center'>
                <Grid item xs={12} textAlign="center" pb={3}>
                    <Typography variant="h5" color="#006400">
                        Sucesso ao adicionar produto!
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Box component='img' src={SuccessProductAdded} sx={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SuccessScreen;

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    paddingY: 1.5,
    paddingX: 5,
    borderRadius: "10px",
    boxShadow: "10px 17px 20px 8px rgba(0,0,0,0.25)",
};