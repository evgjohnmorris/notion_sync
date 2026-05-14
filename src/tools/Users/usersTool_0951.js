/**
 * Generated Tool: usersTool_0951
 * Domain: Users
 * ID: 0951
 */
exports.usersTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0951:', error);
    throw error;
  }
};
