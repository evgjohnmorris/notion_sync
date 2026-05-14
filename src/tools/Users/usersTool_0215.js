/**
 * Generated Tool: usersTool_0215
 * Domain: Users
 * ID: 0215
 */
exports.usersTool_0215 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0215:', error);
    throw error;
  }
};
