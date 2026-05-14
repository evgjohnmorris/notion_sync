/**
 * Generated Tool: usersTool_0095
 * Domain: Users
 * ID: 0095
 */
exports.usersTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0095:', error);
    throw error;
  }
};
