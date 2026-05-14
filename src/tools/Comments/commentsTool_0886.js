/**
 * Generated Tool: commentsTool_0886
 * Domain: Comments
 * ID: 0886
 */
exports.commentsTool_0886 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0886:', error);
    throw error;
  }
};
