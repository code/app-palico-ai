'use client';

import { Divider, styled, Typography } from '@mui/material';
import { TabPanel } from '@palico-ai/components';

interface SlideContentParams {
  value: string;
  description: string;
  video: string;
}

const Video = styled('video')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[2],
  boxSizing: 'border-box',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const PalicoStudioSlideContent: React.FC<SlideContentParams> = ({
  value,
  video,
  description,
}) => {
  return (
    <TabPanel value={value}>
      <Typography variant="body1">{description}</Typography>
      <Divider sx={{ my: 2 }} />
      <Video autoPlay loop muted playsInline src={video} />
    </TabPanel>
  );
};

export default PalicoStudioSlideContent;
