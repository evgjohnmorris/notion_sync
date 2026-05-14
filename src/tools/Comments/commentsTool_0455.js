/**
 * Generated Tool: commentsTool_0455
 * Domain: Comments
 * ID: 0455
 */
exports.commentsTool_0455 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0455:', error);
    throw error;
  }
};
