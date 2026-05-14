/**
 * Generated Tool: commentsTool_0701
 * Domain: Comments
 * ID: 0701
 */
exports.commentsTool_0701 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0701:', error);
    throw error;
  }
};
