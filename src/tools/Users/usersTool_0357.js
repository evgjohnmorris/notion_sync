/**
 * Generated Tool: usersTool_0357
 * Domain: Users
 * ID: 0357
 */
exports.usersTool_0357 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0357:', error);
    throw error;
  }
};
