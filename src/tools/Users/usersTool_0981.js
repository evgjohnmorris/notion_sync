/**
 * Generated Tool: usersTool_0981
 * Domain: Users
 * ID: 0981
 */
exports.usersTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0981:', error);
    throw error;
  }
};
