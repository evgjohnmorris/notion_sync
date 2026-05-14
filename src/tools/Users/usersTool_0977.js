/**
 * Generated Tool: usersTool_0977
 * Domain: Users
 * ID: 0977
 */
exports.usersTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0977:', error);
    throw error;
  }
};
