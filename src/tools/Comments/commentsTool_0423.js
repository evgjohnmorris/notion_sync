/**
 * Generated Tool: commentsTool_0423
 * Domain: Comments
 * ID: 0423
 */
exports.commentsTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0423:', error);
    throw error;
  }
};
