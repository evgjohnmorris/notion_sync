/**
 * Generated Tool: usersTool_0837
 * Domain: Users
 * ID: 0837
 */
exports.usersTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0837:', error);
    throw error;
  }
};
