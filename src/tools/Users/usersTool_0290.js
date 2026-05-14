/**
 * Generated Tool: usersTool_0290
 * Domain: Users
 * ID: 0290
 */
exports.usersTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0290:', error);
    throw error;
  }
};
