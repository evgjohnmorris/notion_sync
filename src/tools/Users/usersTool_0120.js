/**
 * Generated Tool: usersTool_0120
 * Domain: Users
 * ID: 0120
 */
exports.usersTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0120:', error);
    throw error;
  }
};
