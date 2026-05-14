/**
 * Generated Tool: usersTool_0110
 * Domain: Users
 * ID: 0110
 */
exports.usersTool_0110 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0110:', error);
    throw error;
  }
};
