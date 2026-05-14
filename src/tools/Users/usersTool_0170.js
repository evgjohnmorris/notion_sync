/**
 * Generated Tool: usersTool_0170
 * Domain: Users
 * ID: 0170
 */
exports.usersTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0170:', error);
    throw error;
  }
};
