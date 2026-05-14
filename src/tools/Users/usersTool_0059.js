/**
 * Generated Tool: usersTool_0059
 * Domain: Users
 * ID: 0059
 */
exports.usersTool_0059 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0059:', error);
    throw error;
  }
};
