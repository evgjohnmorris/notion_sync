/**
 * Generated Tool: usersTool_0511
 * Domain: Users
 * ID: 0511
 */
exports.usersTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0511:', error);
    throw error;
  }
};
