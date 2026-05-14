/**
 * Generated Tool: usersTool_0836
 * Domain: Users
 * ID: 0836
 */
exports.usersTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0836:', error);
    throw error;
  }
};
