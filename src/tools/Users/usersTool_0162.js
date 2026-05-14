/**
 * Generated Tool: usersTool_0162
 * Domain: Users
 * ID: 0162
 */
exports.usersTool_0162 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0162:', error);
    throw error;
  }
};
