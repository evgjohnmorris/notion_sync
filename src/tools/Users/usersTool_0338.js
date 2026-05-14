/**
 * Generated Tool: usersTool_0338
 * Domain: Users
 * ID: 0338
 */
exports.usersTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0338:', error);
    throw error;
  }
};
