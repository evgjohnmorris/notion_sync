/**
 * Generated Tool: usersTool_0341
 * Domain: Users
 * ID: 0341
 */
exports.usersTool_0341 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0341:', error);
    throw error;
  }
};
