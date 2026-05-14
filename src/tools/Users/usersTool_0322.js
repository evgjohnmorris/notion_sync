/**
 * Generated Tool: usersTool_0322
 * Domain: Users
 * ID: 0322
 */
exports.usersTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0322:', error);
    throw error;
  }
};
