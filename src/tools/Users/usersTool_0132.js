/**
 * Generated Tool: usersTool_0132
 * Domain: Users
 * ID: 0132
 */
exports.usersTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0132:', error);
    throw error;
  }
};
