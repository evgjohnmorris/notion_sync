/**
 * Generated Tool: commentsTool_0737
 * Domain: Comments
 * ID: 0737
 */
exports.commentsTool_0737 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0737:', error);
    throw error;
  }
};
