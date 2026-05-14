/**
 * Generated Tool: commentsTool_0374
 * Domain: Comments
 * ID: 0374
 */
exports.commentsTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0374:', error);
    throw error;
  }
};
