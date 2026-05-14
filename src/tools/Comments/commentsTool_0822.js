/**
 * Generated Tool: commentsTool_0822
 * Domain: Comments
 * ID: 0822
 */
exports.commentsTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0822:', error);
    throw error;
  }
};
