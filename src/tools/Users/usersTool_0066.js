/**
 * Generated Tool: usersTool_0066
 * Domain: Users
 * ID: 0066
 */
exports.usersTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0066:', error);
    throw error;
  }
};
