/**
 * Generated Tool: commentsTool_0797
 * Domain: Comments
 * ID: 0797
 */
exports.commentsTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0797:', error);
    throw error;
  }
};
