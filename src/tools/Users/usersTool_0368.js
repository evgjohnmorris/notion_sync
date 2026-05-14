/**
 * Generated Tool: usersTool_0368
 * Domain: Users
 * ID: 0368
 */
exports.usersTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0368:', error);
    throw error;
  }
};
