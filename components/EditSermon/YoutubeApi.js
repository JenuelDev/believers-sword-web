import axios from "axios"

const instance = axios.create({
    withCredentials: false,
});

export const getYoutubeVideoDetails = async (
    youtubeVideoId,
    key = 'AIzaSyB6XTl8aX3Ro3lVKtPbx_2pHyTVU4GAyQM',
    part = 'snippet,contentDetails,statistics,status') => {

    return await instance.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            key,
            part,
            id: youtubeVideoId
        }
    });
}
