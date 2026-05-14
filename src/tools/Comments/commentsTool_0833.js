/**
 * Generated Tool: commentsTool_0833
 * Domain: Comments
 * ID: 0833
 */
exports.commentsTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0833:', error);
    throw error;
  }
};
