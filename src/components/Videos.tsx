import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from ".";
import { Item } from "../interfaces/YoutubeSearch";

interface VideosProps {
  videos: Item[];
  direction: "row" | "column";
}

const Videos = ({ videos, direction }: VideosProps) => {
  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.defaultProps = {
  direction: "row",
};

export default Videos;
