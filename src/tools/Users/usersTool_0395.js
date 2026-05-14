/**
 * Generated Tool: usersTool_0395
 * Domain: Users
 * ID: 0395
 */
exports.usersTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0395:', error);
    throw error;
  }
};
