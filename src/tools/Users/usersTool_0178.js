/**
 * Generated Tool: usersTool_0178
 * Domain: Users
 * ID: 0178
 */
exports.usersTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0178:', error);
    throw error;
  }
};
