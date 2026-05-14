/**
 * Generated Tool: commentsTool_0893
 * Domain: Comments
 * ID: 0893
 */
exports.commentsTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0893:', error);
    throw error;
  }
};
