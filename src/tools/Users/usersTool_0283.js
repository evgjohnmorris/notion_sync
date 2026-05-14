/**
 * Generated Tool: usersTool_0283
 * Domain: Users
 * ID: 0283
 */
exports.usersTool_0283 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0283:', error);
    throw error;
  }
};
