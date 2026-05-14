/**
 * Generated Tool: usersTool_0961
 * Domain: Users
 * ID: 0961
 */
exports.usersTool_0961 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0961:', error);
    throw error;
  }
};
