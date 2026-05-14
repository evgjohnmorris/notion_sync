/**
 * Generated Tool: usersTool_0036
 * Domain: Users
 * ID: 0036
 */
exports.usersTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0036:', error);
    throw error;
  }
};
