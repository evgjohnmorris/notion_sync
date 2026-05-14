/**
 * Generated Tool: commentsTool_0620
 * Domain: Comments
 * ID: 0620
 */
exports.commentsTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0620:', error);
    throw error;
  }
};
