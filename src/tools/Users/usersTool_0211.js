/**
 * Generated Tool: usersTool_0211
 * Domain: Users
 * ID: 0211
 */
exports.usersTool_0211 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0211:', error);
    throw error;
  }
};
