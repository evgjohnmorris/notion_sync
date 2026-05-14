/**
 * Generated Tool: usersTool_0054
 * Domain: Users
 * ID: 0054
 */
exports.usersTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0054:', error);
    throw error;
  }
};
