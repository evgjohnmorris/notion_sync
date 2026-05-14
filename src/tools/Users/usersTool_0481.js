/**
 * Generated Tool: usersTool_0481
 * Domain: Users
 * ID: 0481
 */
exports.usersTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0481:', error);
    throw error;
  }
};
