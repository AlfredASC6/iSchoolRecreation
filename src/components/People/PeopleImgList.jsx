import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleImgList({ peeps = [], name }) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const isPhoneScreen = useMediaQuery('(min-width:800px)');


  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <ImageList style={{marginLeft: isPhoneScreen ? '3vw' : '5vw', height: '50vw'}} className='imageListContainer'>
        <ImageListItem key="Subheader" cols={ isPhoneScreen ? 3 : 1}>
          <ListSubheader component="div" style={{fontSize: "1.5vw"}}>{name}</ListSubheader>
        </ImageListItem>
        {peeps.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.imagePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imagePath}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ 
                width: isPhoneScreen ? '15vw' : '20vw', // Resize based on screen width
                objectFit: 'fill',
                height: isPhoneScreen ? '20vw' : 'auto',// Resize based on screen width }} 
              }
            }
            
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.name}
              style={{
                width: isPhoneScreen ? '15vw' : '20vw',
                objectFit: 'fill',
                height: isPhoneScreen ? '4vw' : '6vw',
                fontSize: isPhoneScreen ? 'auto' : '1vw'
              }}

              className='resizeItemBar'
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => handleOpen(item)}
                  style={{
                    height: isPhoneScreen ? '5vw': '6vw'
                  }}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))
        
        }
      </ImageList>
      
      {
        selectedItem && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedItem.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedItem.name}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {selectedItem.tagline || ''}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                Email: {selectedItem.email}
              </Typography>
             {selectedItem.interestArea &&  <Typography id="modal-description" sx={{ mt: 2 }}>
                Interest Area: {selectedItem.interestArea}
              </Typography>}
              {selectedItem.office && <Typography id="modal-description" sx={{ mt: 2 }}>
                Office: {selectedItem.office}
              </Typography>}
              {selectedItem.website && <Typography id="modal-description" sx={{ mt: 2 }}>Website: <a href = {selectedItem.website } target='_blank'>{selectedItem.website}</a></Typography>}
              {selectedItem.phone && <Typography>
                Phone: {selectedItem.phone}
              </Typography>}
              {selectedItem.twitter && <Typography id="modal-description" sx={{ mt: 2 }}>Twitter: {selectedItem.twitter}</Typography>}
              {selectedItem.facebook && <Typography id="modal-description" sx={{ mt: 2 }}>Facebook: {selectedItem.facebook}</Typography>}
            </Box>
          </Modal>
        )
      }
    </>
  );
}
