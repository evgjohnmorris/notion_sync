/**
 * Generated Tool: usersTool_0762
 * Domain: Users
 * ID: 0762
 */
exports.usersTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0762:', error);
    throw error;
  }
};
