/**
 * Generated Tool: commentsTool_0630
 * Domain: Comments
 * ID: 0630
 */
exports.commentsTool_0630 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0630:', error);
    throw error;
  }
};
