export const useSermonFormRule = () => {
    return {
        title: {
            required: true,
            message: "The Title is required",
            trigger: ["input", "blur"],
        },

        description: {
            required: true,
            message: "Please Add description",
            trigger: ["input", "blur"],
        },
        language: {
            required: true,
            message: "Please Add Language",
            trigger: ["blur", "change"],
        },

        type: {
            required: true,
            trigger: ["blur", "change"],
            message: "Please select Type",
        },

        source: {
            required: true,
            message: "Please Add Source. Copy paste book title/website link/etc.",
            trigger: ["input", "blur"],
        },
        youtubeVideoId: {
            required: true,
            message: "The Youtube ID is very required",
            trigger: ["input", "blur"],
        },
        scripture: {
            required: true,
            message: "The scripture is very required",
            trigger: ["input", "blur"],
        },
        created_at: {
            type: "number",
            required: true,
            trigger: ["blur", "change"],
            message: "Please Select Create At",
        },
        author: {
            required: true,
            message: "The author is very required",
            trigger: ["input", "blur"],
        },
        denomination: {
            required: true,
            message: "The denomination is very required",
            trigger: ["blur", "change"],
        },
    };
};
