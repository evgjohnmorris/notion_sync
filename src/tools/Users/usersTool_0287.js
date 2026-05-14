/**
 * Generated Tool: usersTool_0287
 * Domain: Users
 * ID: 0287
 */
exports.usersTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0287:', error);
    throw error;
  }
};
