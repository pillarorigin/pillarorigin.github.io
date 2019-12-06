import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import NavTabs from './NavTab';
import ImageAvatars from './Avatar';
import SkillList from './SkillList';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function App() {
    return (
        <Container maxWidth="xl">
            <NavTabs>
            </NavTabs>
            <Box my={4}>
                <ImageAvatars></ImageAvatars>
                <Typography variant="h4" component="h1" gutterBottom>
                    {/* className={classes.bigAvatar} */}
                    <div> Bobby's Resume </div>
                </Typography>
                <SkillList />
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}