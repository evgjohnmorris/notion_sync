/**
 * Generated Tool: commentsTool_0285
 * Domain: Comments
 * ID: 0285
 */
exports.commentsTool_0285 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0285:', error);
    throw error;
  }
};
