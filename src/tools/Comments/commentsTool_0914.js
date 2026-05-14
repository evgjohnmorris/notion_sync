/**
 * Generated Tool: commentsTool_0914
 * Domain: Comments
 * ID: 0914
 */
exports.commentsTool_0914 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0914:', error);
    throw error;
  }
};
