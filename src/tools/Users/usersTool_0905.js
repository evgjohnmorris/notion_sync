/**
 * Generated Tool: usersTool_0905
 * Domain: Users
 * ID: 0905
 */
exports.usersTool_0905 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0905:', error);
    throw error;
  }
};
