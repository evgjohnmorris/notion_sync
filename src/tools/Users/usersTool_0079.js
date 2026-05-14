/**
 * Generated Tool: usersTool_0079
 * Domain: Users
 * ID: 0079
 */
exports.usersTool_0079 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0079:', error);
    throw error;
  }
};
