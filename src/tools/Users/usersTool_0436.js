/**
 * Generated Tool: usersTool_0436
 * Domain: Users
 * ID: 0436
 */
exports.usersTool_0436 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0436:', error);
    throw error;
  }
};
