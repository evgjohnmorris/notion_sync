/**
 * Generated Tool: commentsTool_0182
 * Domain: Comments
 * ID: 0182
 */
exports.commentsTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0182:', error);
    throw error;
  }
};
