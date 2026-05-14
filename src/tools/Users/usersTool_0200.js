/**
 * Generated Tool: usersTool_0200
 * Domain: Users
 * ID: 0200
 */
exports.usersTool_0200 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0200:', error);
    throw error;
  }
};
