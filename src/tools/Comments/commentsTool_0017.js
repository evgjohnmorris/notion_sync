/**
 * Generated Tool: commentsTool_0017
 * Domain: Comments
 * ID: 0017
 */
exports.commentsTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0017:', error);
    throw error;
  }
};
