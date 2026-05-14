/**
 * Generated Tool: usersTool_0982
 * Domain: Users
 * ID: 0982
 */
exports.usersTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0982:', error);
    throw error;
  }
};
