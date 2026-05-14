/**
 * Generated Tool: usersTool_0352
 * Domain: Users
 * ID: 0352
 */
exports.usersTool_0352 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0352:', error);
    throw error;
  }
};
