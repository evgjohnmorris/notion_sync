/**
 * Generated Tool: usersTool_0989
 * Domain: Users
 * ID: 0989
 */
exports.usersTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0989:', error);
    throw error;
  }
};
