/**
 * Generated Tool: commentsTool_0580
 * Domain: Comments
 * ID: 0580
 */
exports.commentsTool_0580 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0580:', error);
    throw error;
  }
};
