/**
 * Generated Tool: usersTool_0087
 * Domain: Users
 * ID: 0087
 */
exports.usersTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0087:', error);
    throw error;
  }
};
