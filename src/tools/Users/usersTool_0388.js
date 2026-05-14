/**
 * Generated Tool: usersTool_0388
 * Domain: Users
 * ID: 0388
 */
exports.usersTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0388:', error);
    throw error;
  }
};
