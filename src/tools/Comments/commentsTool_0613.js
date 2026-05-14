/**
 * Generated Tool: commentsTool_0613
 * Domain: Comments
 * ID: 0613
 */
exports.commentsTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0613:', error);
    throw error;
  }
};
