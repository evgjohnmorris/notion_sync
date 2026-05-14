/**
 * Generated Tool: usersTool_0252
 * Domain: Users
 * ID: 0252
 */
exports.usersTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0252:', error);
    throw error;
  }
};
