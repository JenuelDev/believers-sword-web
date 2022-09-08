import axios from "axios";

const instance = axios.create({
    withCredentials: false,
});

/**
 * This is for getting youtube details
 * @param {string} youtubeVideoId The youtube video ID
 * @param {string} key
 * @param {string} part
 */
const getYoutubeVideoDetails = async (
    youtubeVideoId,
    key = "AIzaSyB6XTl8aX3Ro3lVKtPbx_2pHyTVU4GAyQM",
    part = "snippet,contentDetails,statistics,status"
) => {
    return await instance.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
            key,
            part,
            id: youtubeVideoId,
        },
    });
};

export const useGetYoutubeVideoDetails = () => {
    return getYoutubeVideoDetails;
};
