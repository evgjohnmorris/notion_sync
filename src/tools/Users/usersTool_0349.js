/**
 * Generated Tool: usersTool_0349
 * Domain: Users
 * ID: 0349
 */
exports.usersTool_0349 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0349:', error);
    throw error;
  }
};
