/**
 * Generated Tool: commentsTool_0810
 * Domain: Comments
 * ID: 0810
 */
exports.commentsTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0810:', error);
    throw error;
  }
};
