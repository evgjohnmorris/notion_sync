/**
 * Generated Tool: usersTool_0469
 * Domain: Users
 * ID: 0469
 */
exports.usersTool_0469 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0469:', error);
    throw error;
  }
};
