/**
 * Generated Tool: usersTool_0570
 * Domain: Users
 * ID: 0570
 */
exports.usersTool_0570 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0570:', error);
    throw error;
  }
};
