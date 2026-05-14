/**
 * Generated Tool: commentsTool_0888
 * Domain: Comments
 * ID: 0888
 */
exports.commentsTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0888:', error);
    throw error;
  }
};
