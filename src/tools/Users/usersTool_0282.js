/**
 * Generated Tool: usersTool_0282
 * Domain: Users
 * ID: 0282
 */
exports.usersTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0282:', error);
    throw error;
  }
};
