/**
 * Generated Tool: commentsTool_0818
 * Domain: Comments
 * ID: 0818
 */
exports.commentsTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0818:', error);
    throw error;
  }
};
