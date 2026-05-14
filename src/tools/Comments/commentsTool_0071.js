/**
 * Generated Tool: commentsTool_0071
 * Domain: Comments
 * ID: 0071
 */
exports.commentsTool_0071 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0071:', error);
    throw error;
  }
};
