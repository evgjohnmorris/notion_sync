/**
 * Generated Tool: usersTool_0176
 * Domain: Users
 * ID: 0176
 */
exports.usersTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0176:', error);
    throw error;
  }
};
