/**
 * Generated Tool: commentsTool_0890
 * Domain: Comments
 * ID: 0890
 */
exports.commentsTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0890:', error);
    throw error;
  }
};
