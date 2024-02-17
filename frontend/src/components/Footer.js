import React, { useState } from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import "../styles/Footer.css";
import CRISPR_white from '../assets/CRISPR_white.png'

function Footer() 
{
    const [color, setColor] = useState('neutral');
    return (
        // FOOTER BEGINS....
        <Sheet className="footer"
          variant="solid"
          color='neutral'
          invertedColors
          sx=
          {{
            ...(color !== 'neutral' && 
            {
              bgcolor: `${color}.800`,
            }),
            flexGrow: 1,
            p: 2,
            borderRadius: { xs: 0, sm: 'sm' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

            {/* <Divider orientation="vertical" /> */}

            {/* SOCIAL MEDIA HANDLES  */}

            <IconButton variant="plain" >
              <a href="https://www.facebook.com">
                <FacebookRoundedIcon />
              </a>
            </IconButton>
            <IconButton variant="plain">
            <a href="https://www.github.com">
              <GitHubIcon /></a>
            </IconButton>
            <Input
              variant="soft"
              placeholder="Type in your email"
              type="email"
              name="email"
              endDecorator=
              {
                <IconButton variant="soft" aria-label="subscribe">
                  <SendIcon />
                </IconButton>
              }
              sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
            />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            sx=
            {{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'flex-start' },
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Card
              variant="soft"
              size="sm"
              sx=
              {{
                flexDirection: { xs: 'row', md: 'column' },
                minWidth: { xs: '100%', md: 'auto' },
                gap: 1,
              }}
            >
              <AspectRatio
                ratio="21/9"
                minHeight={80}
                sx={{ flexBasis: { xs: 200, md: "initial"} }}
              >
                <img src= {CRISPR_white} alt=""/>
              </AspectRatio>
              <CardContent>
                <Typography level="body-sm">Developed by CRISPR</Typography>
              </CardContent>
            </Card>
            <List 
              size="md"
              orientation="horizontal"
              wrap
              sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
            >
              <ListItem nested sx={{ width: { xs: '50%', md: 160 } }}>
                <List>
                  <ListItem>
                    <ListItemButton><a href="/about-us">About Us</a></ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Blog</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Contact us</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem nested sx={{ width: { xs: '50%', md: 160 } }}>
                <List>
                  <ListItem>
                    <ListItemButton>Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Blog</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Contact us</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem nested sx={{ width: { xs: '50%', md: 160 } }}>
                <List>
                  <ListItem>
                    <ListItemButton>Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Blog</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Contact us</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>

              <ListItem nested sx={{ width: { xs: '50%', md: 160 } }}>
                <List>
                  <ListItem>
                    <ListItemButton>Services</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Blog</ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>Contact us</ListItemButton>
                  </ListItem>
                </List>
              </ListItem>

              
            </List>
          </Box>
        </Sheet>
    );   
}

export default Footer;
