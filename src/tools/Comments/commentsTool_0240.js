/**
 * Generated Tool: commentsTool_0240
 * Domain: Comments
 * ID: 0240
 */
exports.commentsTool_0240 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0240:', error);
    throw error;
  }
};
