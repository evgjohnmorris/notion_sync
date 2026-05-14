/**
 * Generated Tool: usersTool_0226
 * Domain: Users
 * ID: 0226
 */
exports.usersTool_0226 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0226:', error);
    throw error;
  }
};
