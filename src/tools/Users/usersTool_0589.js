/**
 * Generated Tool: usersTool_0589
 * Domain: Users
 * ID: 0589
 */
exports.usersTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0589:', error);
    throw error;
  }
};
