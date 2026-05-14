/**
 * Generated Tool: usersTool_0261
 * Domain: Users
 * ID: 0261
 */
exports.usersTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0261:', error);
    throw error;
  }
};
