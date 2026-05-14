/**
 * Generated Tool: usersTool_0876
 * Domain: Users
 * ID: 0876
 */
exports.usersTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0876:', error);
    throw error;
  }
};
