/**
 * Generated Tool: usersTool_0040
 * Domain: Users
 * ID: 0040
 */
exports.usersTool_0040 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0040:', error);
    throw error;
  }
};
