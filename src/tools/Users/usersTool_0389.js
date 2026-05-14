/**
 * Generated Tool: usersTool_0389
 * Domain: Users
 * ID: 0389
 */
exports.usersTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0389:', error);
    throw error;
  }
};
