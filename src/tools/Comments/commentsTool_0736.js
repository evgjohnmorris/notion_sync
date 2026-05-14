/**
 * Generated Tool: commentsTool_0736
 * Domain: Comments
 * ID: 0736
 */
exports.commentsTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0736:', error);
    throw error;
  }
};
