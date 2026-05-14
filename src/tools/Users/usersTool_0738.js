/**
 * Generated Tool: usersTool_0738
 * Domain: Users
 * ID: 0738
 */
exports.usersTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0738:', error);
    throw error;
  }
};
