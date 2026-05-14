/**
 * Generated Tool: usersTool_0523
 * Domain: Users
 * ID: 0523
 */
exports.usersTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0523:', error);
    throw error;
  }
};
