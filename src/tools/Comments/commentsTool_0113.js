/**
 * Generated Tool: commentsTool_0113
 * Domain: Comments
 * ID: 0113
 */
exports.commentsTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0113:', error);
    throw error;
  }
};
