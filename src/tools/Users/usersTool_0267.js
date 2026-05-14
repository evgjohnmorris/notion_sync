/**
 * Generated Tool: usersTool_0267
 * Domain: Users
 * ID: 0267
 */
exports.usersTool_0267 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0267:', error);
    throw error;
  }
};
