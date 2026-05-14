/**
 * Generated Tool: commentsTool_0786
 * Domain: Comments
 * ID: 0786
 */
exports.commentsTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0786:', error);
    throw error;
  }
};
