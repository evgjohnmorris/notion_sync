/**
 * Generated Tool: usersTool_0172
 * Domain: Users
 * ID: 0172
 */
exports.usersTool_0172 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0172:', error);
    throw error;
  }
};
