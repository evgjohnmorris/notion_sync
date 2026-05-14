/**
 * Generated Tool: usersTool_0167
 * Domain: Users
 * ID: 0167
 */
exports.usersTool_0167 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0167:', error);
    throw error;
  }
};
