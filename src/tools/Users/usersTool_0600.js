/**
 * Generated Tool: usersTool_0600
 * Domain: Users
 * ID: 0600
 */
exports.usersTool_0600 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0600:', error);
    throw error;
  }
};
