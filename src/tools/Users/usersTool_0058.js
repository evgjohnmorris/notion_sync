/**
 * Generated Tool: usersTool_0058
 * Domain: Users
 * ID: 0058
 */
exports.usersTool_0058 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0058:', error);
    throw error;
  }
};
