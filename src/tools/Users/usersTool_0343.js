/**
 * Generated Tool: usersTool_0343
 * Domain: Users
 * ID: 0343
 */
exports.usersTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0343:', error);
    throw error;
  }
};
