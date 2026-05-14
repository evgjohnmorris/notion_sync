/**
 * Generated Tool: commentsTool_0588
 * Domain: Comments
 * ID: 0588
 */
exports.commentsTool_0588 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0588:', error);
    throw error;
  }
};
