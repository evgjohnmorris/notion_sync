/**
 * Generated Tool: usersTool_0030
 * Domain: Users
 * ID: 0030
 */
exports.usersTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0030:', error);
    throw error;
  }
};
