/**
 * Generated Tool: usersTool_0399
 * Domain: Users
 * ID: 0399
 */
exports.usersTool_0399 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0399:', error);
    throw error;
  }
};
