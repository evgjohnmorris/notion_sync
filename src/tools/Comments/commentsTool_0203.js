/**
 * Generated Tool: commentsTool_0203
 * Domain: Comments
 * ID: 0203
 */
exports.commentsTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0203:', error);
    throw error;
  }
};
