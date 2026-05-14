/**
 * Generated Tool: usersTool_0306
 * Domain: Users
 * ID: 0306
 */
exports.usersTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0306:', error);
    throw error;
  }
};
