import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/contstant";
import { Item } from "../interfaces/YoutubeSearch";
import { Item as ChannelItem } from "../interfaces/YoutubeChannelDetail";

interface VideoProps {
  channelDetail?: Item | undefined;
  channelDetailItem?: ChannelItem | undefined;
  marginTop: string;
}

const ChannelCard = ({
  channelDetail,
  channelDetailItem,
  marginTop,
}: VideoProps) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={`/channel/${
          channelDetailItem === undefined
            ? channelDetail?.id?.channelId
            : channelDetailItem?.id
        }`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetailItem === undefined
                ? channelDetail?.snippet?.thumbnails?.high?.url
                : channelDetailItem?.snippet?.thumbnails?.high?.url ||
                  demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180ox",
              mb: 2,
              borderColor: "#e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetailItem === undefined
              ? channelDetail?.snippet?.title
              : channelDetailItem?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetailItem?.statistics?.subscriberCount !== undefined
            ? parseInt(
                channelDetailItem?.statistics?.subscriberCount
              ).toLocaleString()
            : ""}{" "}
          Subscribers
        </CardContent>
      </Link>
    </Box>
  );
};

ChannelCard.defaultProps = {
  channelDetailItem: undefined,
  marginTop: "0px",
};

export default ChannelCard;
