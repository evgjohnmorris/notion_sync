/**
 * Generated Tool: commentsTool_0732
 * Domain: Comments
 * ID: 0732
 */
exports.commentsTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0732:', error);
    throw error;
  }
};
