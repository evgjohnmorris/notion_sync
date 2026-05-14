/**
 * Generated Tool: usersTool_0460
 * Domain: Users
 * ID: 0460
 */
exports.usersTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0460:', error);
    throw error;
  }
};
