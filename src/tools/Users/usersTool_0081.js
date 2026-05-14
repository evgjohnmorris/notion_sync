/**
 * Generated Tool: usersTool_0081
 * Domain: Users
 * ID: 0081
 */
exports.usersTool_0081 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0081:', error);
    throw error;
  }
};
