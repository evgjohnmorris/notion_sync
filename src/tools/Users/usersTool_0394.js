/**
 * Generated Tool: usersTool_0394
 * Domain: Users
 * ID: 0394
 */
exports.usersTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0394:', error);
    throw error;
  }
};
