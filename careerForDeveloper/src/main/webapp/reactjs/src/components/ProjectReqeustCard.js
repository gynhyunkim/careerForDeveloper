import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {Chip} from "@mui/material";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 320,
        borderRadius: 20,
    },
    content: {
        padding: 15,
    },
}));

export const ProjectRequestCard = React.memo(function ProjectRequestCard(props) {

    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const { request } = props;
    const colors = [
        'primary', 'secondary', 'error', 'info', 'success'
    ];
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Link href={`/request/view/${request.requestId}`} underline="none" color="inherit">

                <Card className={cx(cardStyles.root, shadowStyles.root)} sx={{ position: 'relative', height:100 }}>
                    {/*<CardHeader*/}
                    {/*    avatar={*/}
                    {/*        <Avatar image={project.profileImageLoc}>*/}
                    {/*        </Avatar>*/}
                    {/*    }*/}
                    {/*    title={project.nickname}*/}
                    {/*    subheader={project.createdAt.substring(0,10)}*/}
                    {/*/>*/}
                    <CardContent sx={{pt: 4, padding: 2}}>
                        <Avatar image={request.profileImageLoc}>
                        </Avatar>
                        <Typography component="div">
                            {request.nickname}
                        </Typography>
                        {request.tech && <Chip size="small" color={colors[0]} label={request.tech}  sx={{mb:1}}/>}
                    </CardContent>
                    {/*</StyledCardMedia>*/}
                </Card>
            </Link>
        </Grid>
    );
});

export default ProjectRequestCard