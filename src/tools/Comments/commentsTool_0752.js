/**
 * Generated Tool: commentsTool_0752
 * Domain: Comments
 * ID: 0752
 */
exports.commentsTool_0752 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0752:', error);
    throw error;
  }
};
