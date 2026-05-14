/**
 * Generated Tool: usersTool_0662
 * Domain: Users
 * ID: 0662
 */
exports.usersTool_0662 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0662:', error);
    throw error;
  }
};
