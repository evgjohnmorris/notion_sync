/**
 * Generated Tool: usersTool_0534
 * Domain: Users
 * ID: 0534
 */
exports.usersTool_0534 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0534:', error);
    throw error;
  }
};
