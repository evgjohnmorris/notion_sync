/**
 * Generated Tool: usersTool_0281
 * Domain: Users
 * ID: 0281
 */
exports.usersTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0281:', error);
    throw error;
  }
};
