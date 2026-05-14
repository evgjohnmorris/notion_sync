/**
 * Generated Tool: usersTool_0008
 * Domain: Users
 * ID: 0008
 */
exports.usersTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0008:', error);
    throw error;
  }
};
