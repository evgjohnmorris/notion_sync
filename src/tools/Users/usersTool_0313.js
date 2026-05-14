/**
 * Generated Tool: usersTool_0313
 * Domain: Users
 * ID: 0313
 */
exports.usersTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0313:', error);
    throw error;
  }
};
