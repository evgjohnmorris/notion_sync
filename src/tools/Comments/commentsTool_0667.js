/**
 * Generated Tool: commentsTool_0667
 * Domain: Comments
 * ID: 0667
 */
exports.commentsTool_0667 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0667:', error);
    throw error;
  }
};
