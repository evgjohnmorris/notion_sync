/**
 * Generated Tool: usersTool_0332
 * Domain: Users
 * ID: 0332
 */
exports.usersTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0332:', error);
    throw error;
  }
};
