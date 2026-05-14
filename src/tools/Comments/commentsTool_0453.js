/**
 * Generated Tool: commentsTool_0453
 * Domain: Comments
 * ID: 0453
 */
exports.commentsTool_0453 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0453:', error);
    throw error;
  }
};
