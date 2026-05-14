/**
 * Generated Tool: commentsTool_0263
 * Domain: Comments
 * ID: 0263
 */
exports.commentsTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0263:', error);
    throw error;
  }
};
