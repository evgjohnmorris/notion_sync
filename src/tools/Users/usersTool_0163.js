/**
 * Generated Tool: usersTool_0163
 * Domain: Users
 * ID: 0163
 */
exports.usersTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0163:', error);
    throw error;
  }
};
