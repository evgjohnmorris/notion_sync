/**
 * Generated Tool: usersTool_0106
 * Domain: Users
 * ID: 0106
 */
exports.usersTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0106:', error);
    throw error;
  }
};
