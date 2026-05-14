/**
 * Generated Tool: commentsTool_0777
 * Domain: Comments
 * ID: 0777
 */
exports.commentsTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0777:', error);
    throw error;
  }
};
