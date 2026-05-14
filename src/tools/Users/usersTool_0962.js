/**
 * Generated Tool: usersTool_0962
 * Domain: Users
 * ID: 0962
 */
exports.usersTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0962:', error);
    throw error;
  }
};
