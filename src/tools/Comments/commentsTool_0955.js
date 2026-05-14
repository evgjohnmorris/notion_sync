/**
 * Generated Tool: commentsTool_0955
 * Domain: Comments
 * ID: 0955
 */
exports.commentsTool_0955 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0955:', error);
    throw error;
  }
};
