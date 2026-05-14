/**
 * Generated Tool: usersTool_0078
 * Domain: Users
 * ID: 0078
 */
exports.usersTool_0078 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0078:', error);
    throw error;
  }
};
